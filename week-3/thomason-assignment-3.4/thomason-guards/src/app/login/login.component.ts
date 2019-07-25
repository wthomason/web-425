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
    <h1 class="home">Please Loogin Here!</h1>
  `,
  styles: [`
  .home{
    background-color:greenyellow;
  }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
