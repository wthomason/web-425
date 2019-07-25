/*
=====================================
  ; Title: login.component.ts
  ; Author: William Thomason
  ; Date: July 24 2019
  ; Modified By: William Thomason
  ; Description: login.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="container-fluid">
    <div class="text-center">
      <h1 class="home">Please Login Here!</h1>
    </div>
  </div>
  `,
  styles: [`
  .home{
    background-color:blue;
    color:white;
    margin:20px;
  }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
