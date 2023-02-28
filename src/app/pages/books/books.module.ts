import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookCollectionComponent } from 'src/app/components/book-collection/book-collection.component';
import { BookListComponent } from '../../components/book-list/book-list.component';
import { BookEffects } from 'src/app/state/books/books.effects';
import { booksReducer } from 'src/app/state/books/books.reducer';
import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    BookCollectionComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', booksReducer),
    EffectsModule.forFeature([BookEffects])
  ]  
})
export class BooksPageModule {}
