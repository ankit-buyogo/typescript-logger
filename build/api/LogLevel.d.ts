export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARNING = 2,
    ERROR = 3
}
export declare namespace LogLevel {
    function toLogLevel(val: string): LogLevel | undefined;
}
