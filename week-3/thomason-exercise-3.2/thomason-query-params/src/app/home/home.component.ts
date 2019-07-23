import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>
      Welcome to the Home Page!
    </h1>
  `,
  styles: [`
    .container{
      margin-top: 20px;
    }
    h1{
      color: steelblue;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
