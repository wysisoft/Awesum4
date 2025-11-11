function shallowStringify(obj: any,a: any,b: any) {
  if (obj === null || typeof obj !== "object") {
    return JSON.stringify(obj); // primitives only
  }

  const shallow = {};
  for (const [key, value] of Object.entries(obj)) {
    (shallow as any)[key] = formatValue(value);
  }

  return JSON.stringify(shallow, null, 2);
}

function formatValue(value: any) {
  if (value === null) return null;

  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean") {
    return value;
  }
  if (t === "bigint") return `[BigInt:${value.toString()}]`;
  if (t === "symbol") return `[Symbol:${value.description || ""}]`;
  if (t === "function") return `[Function:${value.name || "anonymous"}]`;

  if (Array.isArray(value)) return `[Array(${value.length})]`;
  if (value instanceof Date) return `[Date:${value.toISOString()}]`;
  if (value instanceof RegExp) return `[RegExp:${value}]`;

  if (t === "object") {
    return `[Object:${value.constructor?.name || "Object"}]`;
  }

  return `[Unknown]`;
}

  interface LogEntry {
    id: number;
    timestamp: string;
    level: 'log' | 'warn' | 'error' | 'info' | 'debug';
    message: string;
    args: any[];
    stackTrace?: string;
    source?: {
      fileName?: string;
      lineNumber?: number;
      columnNumber?: number;
    };
  }

  class GlobalLogger {
    private logs: LogEntry[] = [];
    private nextId = 1;
    private originalConsole: {
      log: typeof console.log;
      warn: typeof console.warn;
      error: typeof console.error;
      info: typeof console.info;
      debug: typeof console.debug;
    };

    constructor() {
      this.originalConsole = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        info: console.info,
        debug: console.debug
      };
      this.initializeConsoleOverride();
    }

    private getStackTrace(): { stackTrace: string; source?: LogEntry['source'] } {
      const stack = new Error().stack;
      if (!stack) {
        return { stackTrace: 'No stack trace available' };
      }

      // Split stack into lines and filter out the first few lines (Error, getStackTrace, createLogEntry, console override)
      const stackLines = stack.split('\n').slice(3);
      const stackTrace = stackLines.join('\n');

      // Try to extract source information from the first relevant stack line
      const firstLine = stackLines[0];
      let source: LogEntry['source'] | undefined;

      if (firstLine) {
        // Match patterns like "at functionName (file.js:line:column)" or "at file.js:line:column"
        const match = firstLine.match(/at\s+(?:.*?\s+\()?([^:]+):(\d+):(\d+)\)?/);
        if (match) {
          source = {
            fileName: match[1].split('/').pop(), // Get just the filename
            lineNumber: parseInt(match[2], 10),
            columnNumber: parseInt(match[3], 10)
          };
        }
      }

      return { stackTrace, source };
    }

    private createLogEntry(level: LogEntry['level'], message: string, ...args: any[]): LogEntry {
      const { stackTrace, source } = this.getStackTrace();

      return {
        id: this.nextId++,
        timestamp: new Date().toLocaleTimeString(),
        level,
        message,
        args: [...args],
        stackTrace,
        source
      };
    }

    private initializeConsoleOverride() {
      // Override console.log
      console.log = (...args: any[]) => {
        const message = args.map(arg =>
          typeof arg === 'object' ? shallowStringify(arg, null, 2) : String(arg)
        ).join(' ');
        this.logs.push(this.createLogEntry('log', message, ...args));
        this.originalConsole.log(...args);
      };

      // Override console.warn
      console.warn = (...args: any[]) => {
        const message = args.map(arg =>
          typeof arg === 'object' ? shallowStringify(arg, null, 2) : String(arg)
        ).join(' ');
        this.logs.push(this.createLogEntry('warn', message, ...args));
        this.originalConsole.warn(...args);
      };

      // Override console.error
      console.error = (...args: any[]) => {
        const message = args.map(arg =>
          typeof arg === 'object' ? shallowStringify(arg, null, 2) : String(arg)
        ).join(' ');
        this.logs.push(this.createLogEntry('error', message, ...args));
        this.originalConsole.error(...args);
      };

      // Override console.info
      console.info = (...args: any[]) => {
        const message = args.map(arg =>
          typeof arg === 'object' ? shallowStringify(arg, null, 2) : String(arg)
        ).join(' ');
        this.logs.push(this.createLogEntry('info', message, ...args));
        this.originalConsole.info(...args);
      };

      // Override console.debug
      console.debug = (...args: any[]) => {
        const message = args.map(arg =>
          typeof arg === 'object' ? shallowStringify(arg, null, 2) : String(arg)
        ).join(' ');
        this.logs.push(this.createLogEntry('debug', message, ...args));
        this.originalConsole.debug(...args);
      };

      // Also capture unhandled errors and promise rejections
      window.addEventListener('error', (event) => {
        this.logs.push(this.createLogEntry('error', `Unhandled Error: ${event.message}`, {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          error: event.error
        }));
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.logs.push(this.createLogEntry('error', `Unhandled Promise Rejection: ${event.reason}`, {
          reason: event.reason,
          promise: event.promise
        }));
      });
    }

    public getLogs(): LogEntry[] {
      return [...this.logs];
    }

    public clearLogs(): void {
      this.logs = [];
    }

    public restoreConsole(): void {
      console.log = this.originalConsole.log;
      console.warn = this.originalConsole.warn;
      console.error = this.originalConsole.error;
      console.info = this.originalConsole.info;
      console.debug = this.originalConsole.debug;
    }
  }

  // Create and export a singleton instance
  export const globalLogger = new GlobalLogger();
  export type { LogEntry };
