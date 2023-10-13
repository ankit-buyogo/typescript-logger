import { LogProvider} from "./api/core/LogProvider";
import { LogProviderImpl } from "./api/core/Impl/LogProviderImpl";
import { LoggerCore } from "./api/core/LoggerCore";
import { LogConfig } from "./api/config/LogConfig";
import { LogLevel } from "./api/LogLevel";




/* Export the API */
export {LogChannel} from "./api/core/LogChannel";
export {LoggerId} from "./api/LoggerId";
export {LogMessage} from "./api/LogMessage";
export {LoggerRuntime} from "./api/config/LoggerRuntime";
export {LogMessageType} from "./api/type/LogMessageType";
export {LoggerCore}
export {LoggerCoreImpl} from "./api/core/Impl/LoggerCoreImpl";
export {LogConfig}
export {LogProviderImpl}
export {LogLevel}
export {LogProvider}

export function createLogProvider(name: string, settings: LogConfig): LogProvider {
  return new LogProviderImpl(name, settings);
}
