import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { booksFeature } from './state/books.reducer';

@NgModule({
  imports: [StoreModule.forFeature(booksFeature)],
})
export class BooksModule {}
