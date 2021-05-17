import { InjectionToken } from '@angular/core';
import { LumberjackConfiguration } from './lumberjack.config';

export const lumberjackConfigToken =
  new InjectionToken<LumberjackConfiguration>('__LUMBERJACK_CONFIG__');
