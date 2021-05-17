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
    this.plugins.forEach((plugin) => {
      if (this.canLog(plugin, level)) {
        switch (level) {
          case 'info':
            plugin.logInfo(message);
            break;
          case 'debug':
            plugin.logDebug(message);
            break;
          case 'error':
            plugin.logError(message);
            break;
          case 'critical':
            plugin.logCritical(message);
            break;
          case 'warning':
            plugin.logWarning(message);
            break;
          case 'trace':
            plugin.logTrace(message);
            break;

          default:
            throw new Error('Unsupported level: ' + level);
        }
      }
    });
  }

  canLog(plugin: SystemPlugin, logLevel: LogLevel): boolean {
    return plugin.config.levels.includes(logLevel);
  }
}
