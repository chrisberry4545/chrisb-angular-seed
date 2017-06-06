import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import 'reflect-metadata';
import 'zone.js';

import { AboutComponent, HomeComponent } from './../../pages/index';
import { AppComponent } from './chris.app.component';
import { rootRouterConfig } from './chris.app.routes';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
  ],
  providers: [],
})
export default class AppModule {}
