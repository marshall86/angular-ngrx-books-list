import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  selectBookCollection,
  selectBooks
} from './state/books/books.selectors';
import { Observable } from 'rxjs';
import { CollectionActions } from './state/collection/collection.actions';
import { invokeBooksAPI } from './state/books/books.actions';
import { Book } from './interfaces/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {} /* implements OnInit {
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
    this.store.dispatch(invokeBooksAPI());
  }
}
*/