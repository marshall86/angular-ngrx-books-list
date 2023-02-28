import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from 'src/app/interfaces/books.model';
import { invokeBooksAPI } from 'src/app/state/books/books.actions';
import { selectBooks } from 'src/app/state/books/books.reducer';
import { getBooks, selectBookCollection } from 'src/app/state/books/books.selectors';
import { CollectionActions } from 'src/app/state/collection/collection.actions';

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
    this.store.dispatch(invokeBooksAPI());
    this.books$ = this.store.select(getBooks);
  }
}
