import { LogLevel } from "../LogLevel";
import { LogChannel } from "../core/LogChannel";
/**
 * The LogConfig that must be provided to the core.
 */
export interface LogConfig {
    readonly level: LogLevel;
    /**
     * What kind of channel to log to.
     * The default channel logs to console.
     */
    readonly channel: LogChannel;
}
