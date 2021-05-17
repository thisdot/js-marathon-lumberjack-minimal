import { ModuleWithProviders, NgModule } from '@angular/core';
import { LumberjackConfiguration } from './lumberjack.config';
import { lumberjackConfigToken } from './lumberjack.config.token';

@NgModule()
export class LumberjackModule {
  static forRoot(
    config: LumberjackConfiguration
  ): ModuleWithProviders<LumberjackModule> {
    return {
      ngModule: LumberjackModule,
      providers: [{ provide: lumberjackConfigToken, useValue: config }],
    };
  }
}
