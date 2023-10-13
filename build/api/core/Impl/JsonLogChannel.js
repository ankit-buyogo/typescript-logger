"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonLogChannel = void 0;
/**
 * Default standard LogChannel which logs to console.
 */
class JsonLogChannel {
    constructor() {
        this.type = "JsonLogChannel";
    }
    write(msg) {
        JSON.stringify("[" + msg.level + "]: " + msg.timeInMillis + ": " + msg.message + (msg.exception ? `\n${msg.exception}` : "")); //test json output
    }
}
exports.JsonLogChannel = JsonLogChannel;
