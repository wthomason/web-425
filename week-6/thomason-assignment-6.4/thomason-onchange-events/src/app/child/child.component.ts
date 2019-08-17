/*
=====================================
  ; Title: child.components.ts
  ; Author: William Thomason
  ; Date: August 17 2019
  ; Modified By: William Thomason
  ; Description: child.components.ts
======================================
*/

import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class='child'>
      <h2>Child</h2>
      <div>Greeting: <strong>{{ greeting }}</strong></div>
      <br>
      <div>User Name:<strong>{{ user.name }}</strong></div>
    </div>
  `,
  styles: [`
  .child{
    background-color: lightgray;
  }
  `]
})
export class ChildComponent implements OnChanges{
  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

}
