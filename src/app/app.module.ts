import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { debug } from './state/meta.reducers';
import { reducers } from './state/reducers';

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
      metaReducers,
    }),
    // BooksModule,
    HttpClientModule
  ],
  declarations: [AppComponent, BookListComponent, BookCollectionComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
