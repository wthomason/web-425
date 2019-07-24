/*
=====================================
  ; Title: home.component.ts
  ; Author: William Thomason
  ; Date: July 24 2019
  ; Modified By: William Thomason
  ; Description: home.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome to the home page!</h1>
  `,
  styles: [`
  h1{
    background-color: gray;
    color: white;
    margin:20px;
    padding:20px;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
