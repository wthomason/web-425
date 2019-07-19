/*
=====================================
  ; Title: app.component.ts
  ; Author: William Thomason
  ; Date: July 18 2019
  ; Modified By: William Thomason
  ; Description: app.component.ts
======================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`<h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>`,
  styles:['h1{ color: red; }']
})
export class AppComponent {
  title = 'app';

  //class Property
  name:string = 'William Thomason';

  //change name function
  changeName(){
    this.name = "William Tyson Thomason";
  }
}
