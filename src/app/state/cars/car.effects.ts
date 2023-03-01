/**
 * Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.
 *
 * effects provide a way to interact with those services and isolate them from the components. Effects are where you handle tasks such as fetching data, long-running tasks that produce multiple events, and other external interactions where your components don't need explicit knowledge of these interactions.
 *
 * Effects when used along with Store, decrease the responsibility of the component
 *
 * In a larger application, this becomes more important because you have multiple sources of data, with multiple services required to fetch those pieces of data, and services potentially relying on other services.
 *
 * Effects handle external data and interactions, allowing your services to be less stateful and only perform tasks related to external interactions
 */

import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import {  mergeMap, of, withLatestFrom } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { carInit, carsFetchAPISuccess } from './car.actions';
import { selectCars } from './car.selectors';
 
 @Injectable()
 export class CarEffects {
   constructor(
     private store: Store, 
     private actions$: Actions
   ) {}
 
   loadCars$ = createEffect(() =>
     this.actions$.pipe(
        ofType(carInit),
        withLatestFrom(this.store.pipe(select(selectCars))),
        mergeMap(([, _carsFromStore]) => {
          return of(carsFetchAPISuccess({
            cars: [
              { id: '1', make: 'ford', model: 'mustang', year: '2005' },
              { id: '2', make: 'ford', model: 'mustang', year: '1987' },
              { id: '3', make: 'ford', model: 'mustang', year: '1976' },
            ]
          }))
        })
      )
    );
 
 }
 