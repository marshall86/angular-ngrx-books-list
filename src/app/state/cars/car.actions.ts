import { createAction, props } from "@ngrx/store";
import { Car } from "./car.reducer";

export const appInit = createAction(
  '[Cars] --- PAGE INIT',
  props<{ cars: Car[] }>()
);