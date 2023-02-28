import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  declarations: [
    CarsComponent,
  ]
})
export class CarsPageModule {}
