/*
=====================================
  ; Title: unsaved-changes.guard.ts
  ; Author: William Thomason
  ; Date: July 24 2019
  ; Modified By: William Thomason
  ; Description: unsaved-changes.guard.ts
======================================
*/

import { Injectable } from "@angular/core";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CanDeactivate } from '@angular/router';


@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent>{

  canDeactivate(component: ProductDetailComponent){
    if (component.name.dirty){
      return window.confirm("You have unsaved Changes. Still want to leave?");
    } else {
      return true;
    }
  }
}
  