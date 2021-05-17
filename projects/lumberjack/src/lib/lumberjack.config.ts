import { LogLevel } from './log-level';

export interface LumberjackConfiguration {
  readonly format: (message: string) => string;
  readonly levels: ReadonlyArray<LogLevel>;
}
