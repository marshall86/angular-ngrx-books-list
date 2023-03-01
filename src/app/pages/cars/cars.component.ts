import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { carInit } from 'src/app/state/cars/car.actions';
import { getCars, selectCars } from 'src/app/state/cars/car.selectors';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
})
export class CarsComponent implements OnInit {
  cars$ = this.store.select(selectCars);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(carInit());
    //this.cars$ = this.store.select(getCars);
  }
}
