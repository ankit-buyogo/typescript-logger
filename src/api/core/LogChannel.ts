import {LogMessage} from "../LogMessage";

/**
 * Used to write a log message to, this is the default type of channel in use.
 * Can be used to write an already fully formatted message.
 */
export interface LogChannel {

  readonly type: string;

  readonly write: (msg: LogMessage) => void;
}
