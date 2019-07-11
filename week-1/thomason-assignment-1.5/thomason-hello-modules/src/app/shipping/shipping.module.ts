/*
=====================================
  ; Title: shipping.module.ts
  ; Author: William Thomason
  ; Date: July 11 2019
  ; Modified By: William Thomason
  ; Description: shipping.module.ts
======================================
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingComponent } from './shipping.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShippingComponent],
  exports: [ShippingComponent]
})
export class ShippingModule { }
