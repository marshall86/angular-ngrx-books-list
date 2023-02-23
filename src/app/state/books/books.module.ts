import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { booksFeature } from './books.reducer';

@NgModule({
  imports: [StoreModule.forFeature(booksFeature)],
})
export class BooksModule {}
