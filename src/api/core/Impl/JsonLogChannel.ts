import {LogChannel} from "../LogChannel";
import { LogMessage } from "../../LogMessage";

/**
 * Default standard LogChannel which logs to console.
 */
export class JsonLogChannel implements LogChannel {

  public readonly type = "JsonLogChannel";

  public write(msg: LogMessage): void {
    JSON.stringify("["+msg.level+"]: "+ msg.timeInMillis+ ": "+ msg.message + (msg.exception ? `\n${msg.exception}` : ""))  //test json output
    
  }
}
