/*
=====================================
  ; Title: app.component.ts
  ; Author: William Thomason
  ; Date: August 17 2019
  ; Modified By: William Thomason
  ; Description: app.component.ts
======================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'thomason-form-validation';

  onSubmit(formData){
    console.log(formData);
  }
}
