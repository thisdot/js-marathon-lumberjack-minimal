export interface SystemPlugin {
  logInfo(message: string): void;
  logDebug(message: string): void;
  logError(message: string): void;
  logCritical(message: string): void;
  logWarning(message: string): void;
  logTrace(message: string): void;
}
