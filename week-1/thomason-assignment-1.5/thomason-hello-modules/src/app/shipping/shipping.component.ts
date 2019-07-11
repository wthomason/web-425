/*
=====================================
  ; Title: shipping.components.ts
  ; Author: William Thomason
  ; Date: July 11 2019
  ; Modified By: William Thomason
  ; Description: shipping.components.ts
======================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      Welcome from the ShippingComponent
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
