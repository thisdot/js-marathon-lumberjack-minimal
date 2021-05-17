import { Inject, Injectable, Optional } from '@angular/core';
import { LogLevel } from './log-level';
import { SystemPlugin } from './plugin';
import { pluginToken } from './plugin.token';
import { lumberjackConfigToken } from './lumberjack.config.token';
import { LumberjackConfiguration } from './lumberjack.config';

@Injectable({
  providedIn: 'root',
})
export class LumberjackService {
  private readonly plugins: SystemPlugin[];
  constructor(
    @Optional() @Inject(pluginToken) plugins: SystemPlugin[],
    @Inject(lumberjackConfigToken) private config: LumberjackConfiguration
  ) {
    // if none plugins is configured use and empty list
    plugins = plugins || [];
    // if a single plugin is configured, wrap it in a list
    this.plugins = Array.isArray(plugins) ? plugins : [plugins];
  }

  log(message: string, level: LogLevel): void {
    const format = this.config.format.bind(this);
    this.plugins.forEach((plugin) => {
      if (this.canLog(plugin, level)) {
        switch (level) {
          case 'info':
            plugin.logInfo(format(message));
            break;
          case 'debug':
            plugin.logDebug(format(message));
            break;
          case 'error':
            plugin.logError(format(message));
            break;
          case 'critical':
            plugin.logCritical(format(message));
            break;
          case 'warning':
            plugin.logWarning(format(message));
            break;
          case 'trace':
            plugin.logTrace(format(message));
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
