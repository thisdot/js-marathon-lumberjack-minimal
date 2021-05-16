import { InjectionToken } from '@angular/core';

import { SystemPlugin } from './plugin';

export const pluginToken = new InjectionToken<SystemPlugin>('__PLUGIN_TOKEN__');
