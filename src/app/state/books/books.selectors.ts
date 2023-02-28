/**
 * Selectors are pure functions used for obtaining slices of store state. @ngrx/store provides a few helper functions for optimizing this selection. Selectors provide many features when selecting slices of state:

Portability
Memoization
Composition
Testability
Type Safety
 */

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from 'src/app/interfaces/books.model';
import { booksFeature } from './books.reducer';

export const selectBooks = createFeatureSelector<Book[]>('books');

export const selectCollectionState = createFeatureSelector<string[]>('collection');

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books, collection) => {
    // console.log(collection);
    // if(!collection) return false;
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);

export const selectBookListPageViewModel = createSelector(
  booksFeature.selectBooks,
  booksFeature.selectLoading,
  (books, loading) => ({books, loading})
)