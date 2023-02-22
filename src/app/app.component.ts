import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { GoogleBooksService } from './book-list/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private booksService: GoogleBooksService, private store: Store) {}

  onAdd(bookId: string): void {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string): void {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  ngOnInit(): void {
    // this.store.dispatch(BooksActions.pageLoaded({loaded: 'true'}));

    this.booksService
      .getBooks()
      .subscribe((books) => {
        this.store.dispatch(BooksApiActions.retrievedBookList({ books }));
        this.store.dispatch(BooksApiActions.booksListLoaded({loaded: 'true'}));
      });
  }
}
