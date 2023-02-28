import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCar } from 'src/app/state/cars/car.selectors';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
})
export class CarsComponent implements OnInit {
  car$ = this.store.select(selectCar);
 
  constructor(private store: Store) {}

  ngOnInit() {}
}
