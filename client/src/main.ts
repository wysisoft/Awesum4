import type { ServerSyncResponseInterface } from "../../server/serverInterfaces/ServerSyncResponseInterface";

import Toast, { POSITION, type PluginOptions } from "vue-toastification";


// Import the CSS or use your own!
import "./../public/vue-toastification.css";

// Initialize global logger first to capture all console output
import "./globalLogger";

// // Test the global logger
// console.log("🚀 Awesum application starting...");
// console.info("Global logger initialized and ready to capture all console output");

// // Test stack trace capture
// console.warn("⚠️ This is a test warning with stack trace");
// console.error("❌ This is a test error with stack trace");

document.getElementById("app")!.innerHTML =
    "<img style='width:50svmin;object-fit: cover;border: .25svmin solid #c4ba00;margin: auto;position: absolute;inset: 0;' src='/loading0.0.0.gif' alt='Loading' />";
//record time right now
const start = new Date().getTime();

import "./scss/bootstrap.scss";
import "./scss/main.scss";
import "bootstrap";

import { createApp, shallowRef } from "vue";
import App from "./App.vue";
import { AwesumDexieGlobalDB } from "./awesumDexieGlobalDB";
import { awesum } from "./awesum";
import { I18nGlobal } from "./i18nGlobal";
import { resources } from "./resources/Resources";
import type { ServerProfileResponseInterface } from "../../server/serverInterfaces/ServerProfileResponseInterface";
import router from "./router";
import { constants } from "../../server/constants";
import { AwesumDexieDB } from "./awesumDexieDB";
import type { ClientApp } from "./clientClasses/App";
import Dexie from "dexie";
import type { ServerAddFollowerRequestInterface } from "../../server/serverInterfaces/ServerAddFollowerRequestInterface";
import type { ServerFollowerRequestInterface } from "../../server/serverInterfaces/ServerFollowerRequestInterface";
import { ServerMessageType } from "../../server/typebox";

//create app early so I can use globalProperties
const app = createApp(App);

const options: PluginOptions = {
    position:POSITION.BOTTOM_RIGHT,
    timeout: 3044,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
    //container: document.getElementById('toast-container')!
};

app.use(Toast, options);

app.use(I18nGlobal._t);

app.config.globalProperties.$awesum = awesum;
app.config.globalProperties.$resources = resources;

var names = await Dexie.getDatabaseNames();
for (var name of names) {
    if (name.startsWith("awesum_")) {
        var dbVersion = name.split("_")[2];
        if (dbVersion = "0.0.0") {
        }
    }
}

awesum.AwesumDexieGlobalDB = shallowRef(await AwesumDexieGlobalDB.CreateAsync()) as any;

awesum.AwesumDexieDB = shallowRef(await AwesumDexieDB.CreateAsync()) as any;

let response = {} as Response;
try {
    response = await fetch(window.location.origin + "/api/profile", {
        method: "GET",
        credentials: "include",
        headers: new Headers({ "content-type": "application/json" }),
    }) as Response;
} catch (e) {
    console.error("❌ Error fetching profile:", e);
    console.warn("⚠️ This error should appear in the log viewer");
}

if (response.ok) {
    var profileResponse = await response
        .json() as ServerProfileResponseInterface;

    if (profileResponse.email) {

        awesum.serverEmail = profileResponse.email;

        awesum.authenticationType = profileResponse.provider;

        awesum.AwesumDexieDB = shallowRef(await AwesumDexieDB.CreateAsync()) as any;

        await awesum.AwesumDexieGlobalDB.global.put({
            id: 1,
            latestEmail: profileResponse.email,
            latestAuthenticationType: profileResponse.provider,
        });

        var s = await awesum.AwesumDexieDB.serverApps.where("email").equals(
            awesum.serverEmail,
        )
            .toArray();

        if (s.length == 0) {
            //go get the apps from the server
            await awesum.refresh();

        }
        else if (s.length > 1) {
            awesum.errorMessage =
                "Multiple apps found for this email - You may need to reset your client data";
            awesum.router.push({ name: I18nGlobal.t(resources.Error.key) });
        }
        else if (s.length == 1) {
            awesum.ownerApp = s[0] as ClientApp;
            await awesum.refreshServerApps();
            await awesum.refreshServerFollowerRequests();

            await awesum.refresh();
        }

        //open a websocket connection to the server, sending all cookies
        const ws = new WebSocket("wss://" + window.location.host + '/ws');

        ws.onopen = () => {
            console.log("WebSocket opened");
            ws.send(JSON.stringify({
                data: {
                    "type": "clientConnected",
                    "sessionId": profileResponse.sessionId
                }
            }));
        };
        ws.onmessage = async (event) => {
            var syncItems = JSON.parse(event.data) as ServerSyncResponseInterface[]
            await awesum.processSyncResponse(syncItems);
        };
        ws.onerror = (event) => {
            console.error("❌ Error on WebSocket:", event);
        };
    }
    else {
        // awesum.AwesumDexieDB = shallowRef(await AwesumDexieDB.CreateAsync()) as any;
        // var s = await awesum.AwesumDexieDB.serverApps.toArray();
        // awesum.ownerApp = s[0] as ClientApp;
        // await awesum.refreshServerApps();
        // await awesum.refreshServerFollowerRequests();
    }
}
else {
    awesum.noInternet = true;
}

app.use(router);


//if start is less than 1 second from now, wait a second, else continue on
const end = new Date().getTime();
if (end - start < 1000) {
    await setTimeout(() => {
        app.mount("#app");
    }, 1000);
} else {
    app.mount("#app");
}
