import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { selectCar } from 'src/app/state/cars/car.selectors';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  // car$ = this.store.select(selectCar);

  constructor(private store: Store) {}
}
