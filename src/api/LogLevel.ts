
export enum LogLevel  { DEBUG, INFO, WARNING, ERROR }

export namespace LogLevel {
    export function toLogLevel(val: string): LogLevel | undefined {
      switch (val.toLowerCase()) {
        case "debug":
          return LogLevel.DEBUG;
        case "info":
          return LogLevel.INFO;
        case "warn":
          return LogLevel.WARNING;
        case "error":
          return LogLevel.ERROR;
        default:
          return undefined;
      }
    }
}

