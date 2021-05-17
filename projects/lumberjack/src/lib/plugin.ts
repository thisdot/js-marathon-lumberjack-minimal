import { PluginConfig } from './plugin.config';

export interface SystemPlugin {
  config: PluginConfig;
  logInfo(message: string): void;
  logDebug(message: string): void;
  logError(message: string): void;
  logCritical(message: string): void;
  logWarning(message: string): void;
  logTrace(message: string): void;
}
