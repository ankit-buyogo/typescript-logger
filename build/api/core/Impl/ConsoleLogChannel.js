"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogChannel = void 0;
/**
 * Default standard LogChannel which logs to console.
 */
class ConsoleLogChannel {
    constructor() {
        this.type = "LogChannel";
    }
    write(msg) {
        if (console && console.log) {
            console.log("[" + msg.level + "]: " + msg.timeInMillis + ": " + msg.message + (msg.exception ? `\n${msg.exception}` : ""));
        }
    }
}
exports.ConsoleLogChannel = ConsoleLogChannel;
