import { LogConfig } from "../../config/LogConfig"
import { LoggerRuntime } from "../../config/LoggerRuntime";

declare class LoggerCoreImpl{
    constructor(runtime: LoggerRuntime)
    export public getconfig(): LogConfig;
    export public get id():string {}
    export public get logLevel(): LogLevel {}
    export public get runtimeSettings(): LoggerRuntime {}
    export public debug(message: string, ...args: unknown[]): void;
    export public debug(message: string, ...args: unknown[]): void {}
    export public info(message: string, ...args: unknown[]): void;
    export public info(message: string, ...args: unknown[]): void {}
    export public warning(message: string, ...args: unknown[]): void;
    export public warning(message: string, ...args: unknown[]): void {}
    export public error(message: string, ...args: unknown[]): void;
    export public error(message: string, ...args: unknown[]): void {}
}