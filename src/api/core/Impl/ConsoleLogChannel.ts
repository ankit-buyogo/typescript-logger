import {LogChannel} from "../LogChannel";
import { LogMessage } from "../../LogMessage";

/**
 * Default standard LogChannel which logs to console.
 */
export class ConsoleLogChannel implements LogChannel {

  public readonly type = "LogChannel";

  public write(msg: LogMessage): void {
    if (console && console.log) {
      console.log("["+msg.level+"]: "+ msg.timeInMillis+ ": "+ msg.message + (msg.exception ? `\n${msg.exception}` : ""));
    }
  }
}
