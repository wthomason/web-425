/*
=====================================
  ; Title: fruit.component.ts
  ; Author: William Thomason
  ; Date: August 1 2019
  ; Modified By: William Thomason
  ; Description: fruit.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';
import{ FruitService } from './fruit.service';
import { Fruit } from './fruit';

@Component({
  selector: 'app-fruit',
  template: `
  <div class="container">
  <div class="row">
    <h2>Fruit Details</h2>
    <table class="table table-hover table-striped">
      <thead class="tbl-header">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ fruit.id }}</td>
          <td>{{ fruit.name }}</td>
          <td>{{ fruit.color }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  `,
  styles: [
    `
    .tbl-header {
      background-color: darkgray;
      color: blue; 
    }

    `
  ],
  providers: [FruitService]
})
export class FruitComponent implements OnInit {

  fruit: Fruit;

  constructor(fruitService: FruitService) {

    this.fruit = fruitService.getFruit();

   }

  ngOnInit() {
  }

}
