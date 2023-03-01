import { createAction, props } from '@ngrx/store';
import { Car } from './car.reducer';

export const carInit = createAction(
  '[Car] Init'
);

export const carsFetchAPISuccess = createAction(
  '[Car API] Fetch API Success',
  props<{ cars: Car[] }>()
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/