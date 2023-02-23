import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../book-list/books.model';

import { selectBooks } from '../state/books/books.reducer';
import { selectBookCollection } from '../state/books/books.selectors';
import { CollectionActions } from '../state/collection/collection.actions';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  books$: Observable<readonly Book[]> = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private store: Store<{books: Book[]}>) {}

  onAdd(bookId: string): void {
    this.store.dispatch(CollectionActions.addBook({ bookId }));
  }

  onRemove(bookId: string): void {
    this.store.dispatch(CollectionActions.removeBook({ bookId }));
  }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Load Books Page] --- Effects' });
  }
}
