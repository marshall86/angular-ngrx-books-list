import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
})
export class CarsComponent implements OnInit {
  constructor() {}
  
  ngOnInit(): void {
    // this.store.dispatch({ type: '[Load Books Page] --- Effects' });
  }
}
