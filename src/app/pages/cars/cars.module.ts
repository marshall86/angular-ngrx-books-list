import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CarEffects } from 'src/app/state/cars/car.effects';
import { carsReducer } from 'src/app/state/cars/car.reducer';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule,
    StoreModule.forFeature('cars', carsReducer),
    EffectsModule.forFeature([CarEffects])
  ],
  declarations: [
    CarsComponent,
  ]
})
export class CarsPageModule {}
