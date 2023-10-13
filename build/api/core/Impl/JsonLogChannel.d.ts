import { LogChannel } from "../LogChannel";
import { LogMessage } from "../../LogMessage";
/**
 * Default standard LogChannel which logs to console.
 */
export declare class JsonLogChannel implements LogChannel {
    readonly type = "JsonLogChannel";
    write(msg: LogMessage): void;
}
