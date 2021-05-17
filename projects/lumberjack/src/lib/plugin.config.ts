import { LogLevel } from './log-level';

export interface PluginConfig {
  readonly levels: ReadonlyArray<LogLevel>;
}
