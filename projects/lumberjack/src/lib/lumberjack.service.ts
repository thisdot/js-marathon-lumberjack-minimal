import { Inject, Injectable, Optional } from '@angular/core';
import { LogLevel } from './log-level';
import { SystemPlugin } from './plugin';
import { pluginToken } from './plugin.token';

@Injectable({
  providedIn: 'root',
})
export class LumberjackService {
  private readonly plugins: SystemPlugin[];
  constructor(@Optional() @Inject(pluginToken) plugins: SystemPlugin[]) {
    // if none plugins is configured use and empty list
    plugins = plugins || [];
    // if a single plugin is configured, wrap it in a list
    this.plugins = Array.isArray(plugins) ? plugins : [plugins];
  }

  log(message: string, level: LogLevel): void {
    switch (level) {
      case 'info':
        this.plugins.forEach((plugin) => plugin.logInfo(message));
        break;
      case 'debug':
        this.plugins.forEach((plugin) => plugin.logDebug(message));
        break;
      case 'error':
        this.plugins.forEach((plugin) => plugin.logError(message));
        break;
      case 'critical':
        this.plugins.forEach((plugin) => plugin.logCritical(message));
        break;
      case 'warning':
        this.plugins.forEach((plugin) => plugin.logWarning(message));
        break;
      case 'trace':
        this.plugins.forEach((plugin) => plugin.logTrace(message));
        break;

      default:
        throw new Error('Unsupported level: ' + level);
        break;
    }
  }
}
