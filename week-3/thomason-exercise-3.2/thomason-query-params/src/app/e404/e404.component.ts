/*
=====================================
  ; Title: e404.component.ts
  ; Author: William Thomason
  ; Date: July 24 2019
  ; Modified By: William Thomason
  ; Description: e404.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
  <div class="container">
  <div class="row">
    <h2>Page Not Found!!</h2>
  </div>
</div>
  `,
  styles: [`
  .container{
    margin-top: 20px;
  }
  h2{
    color: red;
  }`
]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
