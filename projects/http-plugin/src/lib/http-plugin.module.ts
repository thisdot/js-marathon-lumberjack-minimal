import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  PluginConfig,
  pluginConfigToken,
  pluginToken,
} from 'projects/lumberjack/src/public-api';
import { HttpPlugin } from './http.plugin';

export function httpPluginFactory(config: PluginConfig): HttpPlugin {
  return new HttpPlugin(config);
}

@NgModule()
export class HttpPluginModule {
  static forRoot(config: PluginConfig): ModuleWithProviders<HttpPluginModule> {
    return {
      ngModule: HttpPluginModule,
      providers: [
        { provide: pluginConfigToken, useValue: config },
        {
          provide: pluginToken,
          useFactory: httpPluginFactory,
          deps: [pluginConfigToken],
          multi: true,
        },
      ],
    };
  }
}
