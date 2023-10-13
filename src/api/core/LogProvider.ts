//@ts-ignore
import { LoggerCore } from "./LoggerCore.ts";

/**
 * The LogProvider provides the bare minimum that various implementations can use.
 */
export interface LogProvider {

  readonly getLogger: (name: string) => LoggerCore;

}
