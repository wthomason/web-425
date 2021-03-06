/*
=====================================
  ; Title: main.ts
  ; Author: William Thomason
  ; Date: August 6 2019
  ; Modified By: William Thomason
  ; Description: main.ts
======================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
