/*
============================================
; Title: app.po.ts
; Date: 09 September 2019
; Author: William Thomason
; File: app.po.ts
;===========================================
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
