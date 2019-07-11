 /*
=====================================
  ; Title: app.module.ts
  ; Author: William Thomason
  ; Date: July 11 2019
  ; Modified By: William Thomason
  ; Description: app.module.ts
======================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShippingModule } from './shipping/shipping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
