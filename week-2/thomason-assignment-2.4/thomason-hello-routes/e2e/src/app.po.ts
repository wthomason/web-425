/*
=====================================
  ; Title: app.po.ts
  ; Author: William Thomason
  ; Date: July 18 2019
  ; Modified By: William Thomason
  ; Description: app.po.ts
======================================
*/

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
