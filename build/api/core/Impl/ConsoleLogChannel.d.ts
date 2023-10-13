import { LogChannel } from "../LogChannel";
import { LogMessage } from "../../LogMessage";
/**
 * Default standard LogChannel which logs to console.
 */
export declare class ConsoleLogChannel implements LogChannel {
    readonly type = "LogChannel";
    write(msg: LogMessage): void;
}
