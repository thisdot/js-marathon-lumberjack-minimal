import { Inject, Injectable } from '@angular/core';
import {
  PluginConfig,
  SystemPlugin,
  pluginConfigToken,
} from 'projects/lumberjack/src/public-api';

@Injectable()
export class HttpPlugin implements SystemPlugin {
  constructor(@Inject(pluginConfigToken) readonly config: PluginConfig) {}
  logInfo(message: string): void {
    console.info(message);
  }
  logDebug(message: string): void {
    console.debug(message);
  }
  logError(message: string): void {
    console.error(message);
  }
  logCritical(message: string): void {
    console.error(message);
  }
  logWarning(message: string): void {
    console.warn(message);
  }
  logTrace(message: string): void {
    console.trace(message);
  }
}
