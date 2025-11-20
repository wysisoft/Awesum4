import asyncio
import json
import os
import re
import websockets
from websockets.exceptions import ConnectionClosed
from datetime import datetime, timedelta
from threading import Timer
import subprocess
import base64
import sys
import ssl
import inspect
import traceback

version = "1.0.0"

def log(message, include_stack_trace=False):
    """Log a message to the log file with optional stack trace."""
    try:
        current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        # Get caller information
        
        caller_info = ""
        if include_stack_trace:
            # Get the current frame and its caller
            current_frame = inspect.currentframe()
            if current_frame and current_frame.f_back:
                caller_frame = current_frame.f_back
                filename = os.path.basename(caller_frame.f_code.co_filename)
                line_number = caller_frame.f_lineno
                function_name = caller_frame.f_code.co_name
                caller_info = f" [{filename}:{line_number}:{function_name}]"
            
            # Get full stack trace
            stack_trace = "".join(traceback.format_stack())
            message = f"{message}\nStack trace:\n{stack_trace}"
        
        timeAndMessage = f"{current_time}{caller_info} - {message}"
        print(timeAndMessage)
        
        # Create directory if it doesn't exist
        os.makedirs(os.path.dirname(logLocation), exist_ok=True)
        
        # If log is larger than 1MB, truncate it
        if os.path.exists(logLocation) and os.path.getsize(logLocation) > 1000000:
            with open(logLocation, "w") as f:
                f.write(timeAndMessage + "\n")
        else:
            with open(logLocation, "a") as f:
                f.write(timeAndMessage + "\n")
    except Exception as e:
        print(f"Error logging: {e}")

try:
    #check runnning processes for awesum.py
    if len(subprocess.run(["ps", "-ef"], capture_output=True, text=True).stdout.splitlines()) > 1:
        log("Another instance of awesum is running")
        sys.exit(1)

    ssl_context = ssl.create_default_context()
    ssl_context.check_hostname = True
    ssl_context.verify_mode = ssl.CERT_REQUIRED

    # If you have a custom CA bundle file
    ssl_context.load_verify_locations('/usr/lib/awesum/fullchain.pem')

    SERVER_URL = "wss://awesum.app/"
    logLocation = "/usr/lib/awesum/awesum.log"

    # Global state variables
    routerId = ""
    remaining_time = 0
    remaining_immediate_time = 0
    status = "disabled"
    dns_requests = []
    socketConnection = None
    heartbeatSeconds = 10

    startTime = ""
    duration = ""

    dayStrings = []

    def log_error(message, error=None, include_stack_trace=True):
        """Log an error message with optional exception details and stack trace."""
        error_details = ""
        if error:
            error_details = f" - Exception: {type(error).__name__}: {str(error)}"
        
        log(f"ERROR: {message}{error_details}", include_stack_trace=include_stack_trace)

    def run_command(command, timeout=30):
        try:
            log(f"Running command: {command}")
            result = subprocess.run(
                command, shell=True, capture_output=True, 
                text=True, timeout=timeout
            )
            if result.returncode != 0:
                log(f"Command failed with code {result.returncode}: {result.stderr}")
                return None
            return result.stdout.strip()
        except subprocess.TimeoutExpired:
            log(f"Command timed out: {command}")
            return None

    def get_router_mac():
        """Get the MAC address of the router."""
        try:
            output = run_command("ip neigh show | grep $(ip route | grep default | awk '{print $3}')")
            if output:
                mac_address = re.search(r'(([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2})', output)
                if mac_address:
                    log(f"Router MAC address: {mac_address.group(0)}")
                    return mac_address.group(0)
            log("Router MAC address not found")
            return None
        except Exception as e:
            log(f"Error retrieving MAC address: {e}")
            return None

    def remove_firewall_rule_by_name(rule_name,commit=True):
        """Remove a firewall rule by its name."""
        try:
            log(f"Removing rule: {rule_name}")
            rule_indices = run_command(f"""uci show firewall | grep "name='{rule_name}'"  | tr '\n' ';'""")
            if rule_indices:
                for line in rule_indices.split(';'):
                    if '=' in line:
                        rule_path = line.split('=')[0]
                        rule_path = rule_path.replace('.name','')
                        run_command(f"uci delete {rule_path}")
            if commit:
                run_command("uci commit firewall")
                run_command("/etc/init.d/firewall restart")

        except Exception as e:
            log(f"Error removing firewall rule {rule_name}: {e}")

    def start_dns_logging():
        """Enable DNS logging in dnsmasq."""
        try:
            log("Starting DNS logging...")
            # Clear existing log
            run_command("echo '' > /tmp/dnsmasq.log")
            # Enable logging in dnsmasq
            run_command("uci set dhcp.@dnsmasq[0].logqueries='1'")
            run_command("uci set dhcp.@dnsmasq[0].logfacility='/tmp/dnsmasq.log'")
            run_command("uci set dhcp.@dnsmasq[0].quietdhcp='1'")
            run_command("service dnsmasq restart")
            log("DNS logging enabled.")
        except Exception as e:
            log(f"Error starting DNS logging: {e}")

    def stop_dns_logging():
        """Disable DNS logging in dnsmasq."""
        try:
            log("Stopping DNS logging...")
            run_command("uci set dhcp.@dnsmasq[0].logqueries='0'")
            run_command("service dnsmasq restart")
            log("DNS logging disabled.")
        except Exception as e:
            log(f"Error stopping DNS logging: {e}")

    async def parse_dns_log():
        """Parse the DNS log and update the list of DNS requests."""
        global socketConnection
        try:
            log_path = "/tmp/dnsmasq.log"
            if not os.path.exists(log_path):
                log("DNS log file not found.")
                return

            log("Parsing DNS log...")
            new_requests = []
            
            with open(log_path, "r") as log_file:
                for line in log_file:
                    if "query[A]" in line or "query[AAAA]" in line:
                        parts = line.split()
                        # Example line:
                        # Jun 14 22:36:56 dnsmasq[1]: 23414 192.168.1.124/60926 query[A] d21t3ooy68jlh9.cloudfront.net from 192.168.1.124
                        # Index:  0   1      2          3        4              5        6        7                           8    9
                        
                        if len(parts) >= 8:  # Ensure we have enough parts for domain at index 7
                            timestamp = f"{parts[0]} {parts[1]} {parts[2]}"  # Include time
                            domain = parts[7]  # Domain is at index 7
                            
                            if domain and not any(req['domain'] == domain for req in new_requests):
                                #convert timestamp from 'Aug 16 17:17:50' to javascript ticks 
                                #javascript ticks is milliseconds since 1970-01-01T00:00:00.000Z
                                timestampTicks = int(datetime.strptime(timestamp, "%b %d %H:%M:%S").timestamp() * 1000)
                                new_requests.append({'timestamp': timestampTicks, 'domain': domain, 'routerId': routerId})
                                if len(new_requests) >= 200:  # Limit to prevent memory issues
                                    break
            
            #truncate /tmp/dnsmasq.log not using truncate -s 0 because it is not available on all routers
            run_command("echo '' > /tmp/dnsmasq.log")

            log(f"New requests: {new_requests}")

            # Send DNS entries via WebSocket if connected
            if socketConnection and not socketConnection.closed:
                log(f"Sending {len(new_requests)} DNS entries to server.")
                await socketConnection.send(json.dumps({
                    "type": "createDnsEntriesRequest",
                    "addDnsEntriesRequest": new_requests
                }))
                log(f"Sent {len(new_requests)} DNS entries to server.")
            else:
                log("No socket connection")
            
            log("DNS requests updated.")
        except Exception as e:
            log(f"Error parsing DNS log: {e}")

    #def periodic_dns_log_parsing(interval):
    #    """Run parse_dns_log periodically at the specified interval (in seconds)."""
    #    global dns_timer
    #    try:
    #        # Create event loop for async function if not in async context
    #        asyncio.run(parse_dns_log())
    #    except RuntimeError:
    #        # If no event loop is running, we'll skip this iteration
    #        log("No event loop available for DNS parsing")
    #    
    #    dns_timer = Timer(interval, periodic_dns_log_parsing, [interval])
    #    dns_timer.start()

    def enable_internet():
        """Enable internet access for a specified duration (in minutes)."""
        global status
        try:
            # Remove the "Block-All-Internet" rule
            remove_firewall_rule_by_name("Block-All-Internet")
            remove_firewall_rule_by_name("Allow-Awesum-HTTPS")
            log(f"Internet access enabled")

            start_dns_logging()
            
            # Start DNS logging if not already running
            #if not dns_timer or not dns_timer.is_alive():
            #    periodic_dns_log_parsing(300)  # Parse every 5 minutes

            status = "enabled"
        
        except Exception as e:
            log(f"Error enabling internet: {e}")

    async def disable_internet():
        """Disable all internet access except for traffic explicitly allowed."""
        global status
        try:
            log("Disabling internet access...")
            
            # Stop DNS logging and parse final results
            stop_dns_logging()
            await parse_dns_log()

            remove_firewall_rule_by_name("Block-All-Internet",commit=False)

            # Add a rule to block all outgoing traffic
            run_command("uci add firewall rule")
            run_command("uci set firewall.@rule[-1].name='Block-All-Internet'")
            run_command("uci set firewall.@rule[-1].src='lan'")
            run_command("uci set firewall.@rule[-1].dest='wan'")
            run_command("uci set firewall.@rule[-1].target='REJECT'")

            remove_firewall_rule_by_name("Allow-Awesum-HTTPS",commit=False)

            # Allow traffic to awesum.app on port 443 (HTTPS)
            run_command("uci add firewall rule")
            run_command("uci set firewall.@rule[-1].name='Allow-Awesum-HTTPS'")
            run_command("uci set firewall.@rule[-1].src='lan'")
            run_command("uci set firewall.@rule[-1].dest='wan'")
            run_command("uci set firewall.@rule[-1].dest_ip='awesum.app'")
            run_command("uci set firewall.@rule[-1].dest_port='443'")
            run_command("uci set firewall.@rule[-1].proto='tcp'")
            run_command("uci set firewall.@rule[-1].target='ACCEPT'")


            # Commit and apply the firewall rules
            run_command("uci commit firewall")
            run_command("/etc/init.d/firewall restart")
            log("Internet access disabled (except for allowed rules).")

            # Reset timers and remaining time
            #if current_timer:
            #    current_timer.cancel()
            #if dns_timer:
            #    dns_timer.cancel()
            status = "disabled"
            
        except Exception as e:
            log(f"Error disabling internet: {e}")
        

    async def connect_to_server():
        """Connect to the WebSocket server and listen for commands."""
        global socketConnection,remaining_time,remaining_immediate_time,status,startTime,duration,dayStrings,routerId
        
        while True:
            try:
                log(f"Attempting to connect to {SERVER_URL}")
                router_mac_decoded = get_router_mac()
                if router_mac_decoded:
                    router_mac_encoded = base64.b64encode(router_mac_decoded.encode('utf-8')).decode('utf-8')
                    headers = {
                        "Cookie": f"mac={router_mac_encoded}"
                    }
                    log(f"Router MAC: {router_mac_decoded}, Encoded: {router_mac_encoded}")
                else:
                    log("Failed to get router MAC address")
                    headers = {}
                async with websockets.connect(SERVER_URL, ssl=ssl_context, extra_headers=headers) as websocket:
                    socketConnection = websocket
                    log("Connected to WebSocket server.")
                    
                    try:
                        async for message in websocket:
                            log(f"Received message: {message}")
                            try:
                                data = json.loads(message)
                                
                                # Process commands
                                if isinstance(data, dict) and "type" in data:
                                    command = data["type"]
                                    
                                    if command == "updateRouterTimesAndDurationsRequest":
                                        routerId = data["routerId"]
                                        dayStrings.append(data["mondayTimesAndDurations"].split(","))
                                        dayStrings.append(data["tuesdayTimesAndDurations"].split(","))
                                        dayStrings.append(data["wednesdayTimesAndDurations"].split(","))
                                        dayStrings.append(data["thursdayTimesAndDurations"].split(","))
                                        dayStrings.append(data["fridayTimesAndDurations"].split(","))
                                        dayStrings.append(data["saturdayTimesAndDurations"].split(","))
                                        dayStrings.append(data["sundayTimesAndDurations"].split(","))
                                        
                                    elif command == "updateRouterStatusRequest":
                                        log(f"updateRouterStatusRequest: {data}")
                                        if(data["status"] == "enabled"):
                                            log("enabling internet from server")
                                            enable_internet()
                                        else:
                                            log("disabling internet from server")
                                            await disable_internet()
                                            pass
                                        remaining_time += int(data["remainingTime"])*60
                                        remaining_immediate_time += int(data["remainingImmediateTime"])*60
                                        log(f"Remaining time: {remaining_time}, Remaining immediate time: {remaining_immediate_time}")
                                    
                                    elif command == "getRouterStatusRequest":
                                        log("getRouterStatusRequest")
                                        await websocket.send(json.dumps({
                                            "type": "routerStatusResponse",
                                            "remaining_time": remaining_time,
                                            "remaining_immediate_time": remaining_immediate_time,
                                            "status": status,
                                            "startTime": startTime.strftime("%H:%M"),
                                            "duration": duration,
                                            "requestId": data["requestId"]
                                        }))
                                    else:
                                        log(f"Unknown command: {command}")
                                        
                            except json.JSONDecodeError as e:
                                log(f"Error decoding message: {e}")
                                
                    except ConnectionClosed:
                        log("Connection closed by client")
                        socketConnection = None
                        raise
                    except Exception as e:
                        log(f"Error handling messages: {e}")
                        socketConnection = None
                        raise
                    
            except ConnectionClosed:
                log("Connection closed. Reconnecting in 5 seconds...")
                socketConnection = None
                
            except Exception as e:
                log(f"Connection error: {e}. Reconnecting in 5 seconds...")
                socketConnection = None
                
            await asyncio.sleep(5)
        
    async def check_internet_status_loop():
        while True:
            await check_internet_status()
            await asyncio.sleep(heartbeatSeconds)

    #start a timer that ticks every 10 seconds to determine if the router should be enabled based on timesAndDurations variables
    async def check_internet_status():
        global remaining_time,remaining_immediate_time,status,startTime,duration,dayStrings
        """Check if the internet should be enabled or disabled based on the current time and the timesAndDurations variables."""
        
        log("heartbeat")

        await parse_dns_log()
        
        current_time = datetime.now()
        #if its monday, check the mondayTimesAndDurations variables
        
        current_weekday = datetime.now().weekday()
        
        # Check if we have data for the current weekday
        if remaining_immediate_time > 0:
            if status == "disabled":
                log("enabling internet because of remaining immediate time")
                enable_internet()
                return
            else:
                remaining_immediate_time -= heartbeatSeconds
                if(remaining_immediate_time <= 0):
                    log("disabling internet because of remaining immediate time")
                    await disable_internet()
                    remaining_immediate_time = 0
                    return

        startTime = "No time set today"
        if current_weekday < len(dayStrings) and dayStrings[current_weekday]:
            for timeAndDuration in dayStrings[current_weekday]:
                #if now is mondayTimesAndDuration start time and startTime + duration, check if the current time is between start and end
                startTime = datetime.strptime(timeAndDuration.split("|")[0], "%H:%M")
                duration = timeAndDuration.split("|")[1]
                endTime = startTime + timedelta(minutes=int(duration))
                if current_time >= startTime and current_time <= endTime and remaining_time > 0:
                    if(status == "disabled"):
                        log("enabling internet because of scheduled time")
                        enable_internet()
                        return
                    else:
                        remaining_time -= heartbeatSeconds
                        if(remaining_time <= 0):
                            log("disabling internet because of scheduled time")
                            await disable_internet()
                            remaining_time = 0
                            return
                elif remaining_immediate_time == 0:
                    if(status == "enabled"):
                        log("disabling internet because outside of scheduled time")
                        await disable_internet()
                        remaining_time = 0
                        return
                    else:
                        return

    async def main():
        """Main function to set up firewall rules and connect to server."""
        try:
            # Start with internet disabled
            log("Disabling internet...")
            await disable_internet()
            log("Internet disabled")
                        
            #run check_internet_status_loop() in a manner so that this code continues not waiting for it to respond
            log("Starting internet status check loop...")
            asyncio.create_task(check_internet_status_loop())

            # Connect to server
            log("Connecting to server...")
            await connect_to_server()
        except Exception as e:
            log_error("Critical error in main function", e)
            raise

    if __name__ == "__main__":
        try:
            log("Starting Awesum application...")
            asyncio.run(main())
        except KeyboardInterrupt:
            log("Received keyboard interrupt, enabling internet and exiting...")
            try:
                enable_internet()
            except Exception as e:
                log_error("Failed to enable internet on exit", e)
            log("Exiting...")
except Exception as e:
    log("Unhandled exception in main - " + str(e), include_stack_trace=True)
    sys.exit(1)