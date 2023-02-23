import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { debug } from './state/meta.reducers';
import { reducers } from './state/reducers';
import { BookEffects } from './state/books/books.effects';
import { EffectsModule } from '@ngrx/effects';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';


export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: false,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
      metaReducers
    }),
    EffectsModule.forRoot([BookEffects]),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'prefix'
      },
      {
        path: 'books',
        loadChildren: () => import('./books/books.module').then(m => m.BooksPageModule),
      },
      {
        path: 'cars',
        loadChildren: () => import('./cars/cars.module').then(m => m.CarsPageModule),
      }
    ]),
    StoreRouterConnectingModule.forRoot(),
    // BooksModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
