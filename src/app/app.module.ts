import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { debug } from './state/meta.reducers';
import { reducers } from './state/reducers';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';


export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    EffectsModule.forRoot([]),
    // EffectsModule.forRoot([BookEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  declarations: [
    AppComponent, 
    /* BookListComponent, 
    BookCollectionComponent */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
