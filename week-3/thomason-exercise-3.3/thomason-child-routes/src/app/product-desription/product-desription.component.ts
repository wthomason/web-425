/*
=====================================
  ; Title: product-desription.component.ts
  ; Author: William Thomason
  ; Date: July 24 2019
  ; Modified By: William Thomason
  ; Description: product-desription.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-desription',
  template: `
  <br/><br/>
  <h1>Product description</h1>
    <p>
      This is an amazing product!
    </p>
  `,
  styles: [`
    h1{
      color:blue;
    }
  `]
})
export class ProductDesriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
