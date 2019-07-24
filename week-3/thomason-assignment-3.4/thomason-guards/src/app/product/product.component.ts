/*
=====================================
  ; Title: product.component.ts
  ; Author: William Thomason
  ; Date: July 24 2019
  ; Modified By: William Thomason
  ; Description: product.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    <p>
      product works!
    </p>
  `,
  styles: []
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
