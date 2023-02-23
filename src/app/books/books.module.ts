import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BookCollectionComponent } from '../book-collection/book-collection.component';
import { BookListComponent } from '../book-list/book-list.component';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule
  ],
  declarations: [
    BooksComponent,
    BookCollectionComponent,
    BookListComponent
  ]
})
export class BooksPageModule {}
