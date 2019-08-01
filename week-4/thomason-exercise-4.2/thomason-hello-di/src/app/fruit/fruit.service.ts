/*
=====================================
  ; Title: fruit.service.ts
  ; Author: William Thomason
  ; Date: August 1 2019
  ; Modified By: William Thomason
  ; Description: fruit.service.ts
======================================
*/

import { Injectable } from '@angular/core';
import { Fruit } from './fruit'; 


@Injectable()

export class FruitService {

  getFruit() : Fruit {
    return new Fruit(0, 'Mango', 'Orange');
  }

}
