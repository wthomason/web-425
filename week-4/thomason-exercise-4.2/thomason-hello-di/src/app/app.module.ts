/*
=====================================
  ; Title: app.module.ts
  ; Author: William Thomason
  ; Date: August 1 2019
  ; Modified By: William Thomason
  ; Description: app.module.ts
======================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
