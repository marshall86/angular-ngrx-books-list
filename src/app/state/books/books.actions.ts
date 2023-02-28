/**
 * Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. From user interaction with the page, external interaction through network requests, and direct interaction with device APIs, these and more events are described with actions.
 */

import { createAction, createActionGroup, props } from '@ngrx/store';
import { Book } from 'src/app/interfaces/books.model';

export const invokeBooksAPI = createAction(
  '[Books API] --- Load Effects'
);

export const booksFetchAPISuccess = createAction(
  '[Books API] Fetch API Success',
  props<{ books: Book[] }>()
);

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: Book[] }>(),
    'Books list loaded': props<{loaded: string}>()
  },
});