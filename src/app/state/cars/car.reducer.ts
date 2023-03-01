import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { carsFetchAPISuccess } from './car.actions';

export interface Car {
  id: string;
  year: string;
  make: string;
  model: string;
}

export type CarState = EntityState<Car>;

export const carAdapter = createEntityAdapter<Car>({
  selectId: (car) => car.id,
});

// const initialState = carAdapter.getInitialState();

/* export const carReducer = createReducer<CarState>(
  initialState,
  on(carsFetchAPISuccess, (state, { cars }) => {
    console.log(state, cars);
    return carAdapter.addMany(cars, state);
  })
); */



export const initialState: Car[] = [];

export const carsReducer = createReducer(
  initialState,
  on(carsFetchAPISuccess, (_state, { cars }) => cars),
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/