"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["INFO"] = 1] = "INFO";
    LogLevel[LogLevel["WARNING"] = 2] = "WARNING";
    LogLevel[LogLevel["ERROR"] = 3] = "ERROR";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
(function (LogLevel) {
    function toLogLevel(val) {
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
    LogLevel.toLogLevel = toLogLevel;
})(LogLevel || (exports.LogLevel = LogLevel = {}));
