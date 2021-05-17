import { InjectionToken } from '@angular/core';
import { PluginConfig } from './plugin.config';

export const pluginConfigToken = new InjectionToken<PluginConfig>(
  '__PLUGIN_CONFIG__'
);
