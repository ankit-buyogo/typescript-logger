import {LogLevel} from "../LogLevel";
import {LoggerRuntime} from "../config/LoggerRuntime";
/**
 * All methods accept a message and optionally an error and additional arguments.
 */
export interface LoggerCore {

  // Id by which this logger is identified (not relevant for an end user).
  readonly id: LoggerRuntime;

  readonly logLevel: LogLevel;

  /**
   * The current runtime settings for this Logger.
   * would be replaced by requestCotnext
   */
  readonly runtimeSettings: LoggerRuntime;

  debug(message: string, ...args: unknown[]): void;
 info(message: string, ...args: unknown[]): void;
  warning(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}
