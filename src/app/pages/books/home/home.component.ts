import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { invokeBooksAPI } from 'src/app/state/books/books.actions';
import { selectBooks } from 'src/app/state/books/books.reducer';
import { selectBookCollection } from 'src/app/state/books/books.selectors';
import { CollectionActions } from 'src/app/state/collection/collection.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

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