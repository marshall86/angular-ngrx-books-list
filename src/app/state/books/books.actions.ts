/**
 * Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. From user interaction with the page, external interaction through network requests, and direct interaction with device APIs, these and more events are described with actions.
 */

import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../../book-list/books.model';

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
    'Books list loaded': props<{loaded: string}>()
  },
});