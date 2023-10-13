import { LogLevel } from "./LogLevel";
/**
 * The LogMessage to write away to a LogChannel
 */
export interface LogMessage {

  /**
   * Json message 
  */
  readonly message: string; 
  readonly level: LogLevel;
  readonly timeInMillis: number;  //change to timestamp
  readonly loggerName: string;  //classname+worker

  /**
   * Original user message.
   */
  readonly original_message?: string;

  /**
   * Error if present.
   */
  readonly exception?: string;

}
