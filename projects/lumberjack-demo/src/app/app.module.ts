import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpPluginModule } from 'projects/http-plugin/src/public-api';
import { LumberjackModule } from 'projects/lumberjack/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LumberjackModule.forRoot({
      format: (message: string) => `🪓 ${message} 🌲`,
      levels: ['error', 'warning'],
    }),
    HttpPluginModule.forRoot({
      levels: ['error', 'warning'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
