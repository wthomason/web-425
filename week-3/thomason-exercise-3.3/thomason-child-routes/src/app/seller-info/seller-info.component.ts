/*
=====================================
  ; Title: seller-info.component.spec.ts
  ; Author: William Thomason
  ; Date: July 24 2019
  ; Modified By: William Thomason
  ; Description: seller-info.component.spec.ts
======================================
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      The seller is Mary Lou, id {{ sellerId }}
    </p>
  `,
  styles: [`
    :host{
      background: yellow;
    }
  `]
})
export class SellerInfoComponent implements OnInit {

  sellerId: string;

  constructor(route:ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
