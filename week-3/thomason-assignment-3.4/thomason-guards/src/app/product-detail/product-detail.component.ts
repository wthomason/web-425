/*
=====================================
  ; Title: product-detail.component.ts
  ; Author: William Thomason
  ; Date: July 24 2019
  ; Modified By: William Thomason
  ; Description: product-detail.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'product-detail',
  template: `
  <div class="container-fluid">
    <div class="text-center">
      <h1 class="product">Product Detail Component</h1>
      <input placeholder="Enter your name" type="text" [formControl]="name">
    </div>
  </div>
  `,
  styles: [ `
    .product { 
      backgorund-color: cyan;
      margin:20px;
    }
  `]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
