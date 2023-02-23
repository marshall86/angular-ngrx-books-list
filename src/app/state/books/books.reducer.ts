/**
 * Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. Reducer functions handle these transitions by determining which actions to handle based on the action's type.
 */

import { createFeature, createReducer, on } from '@ngrx/store';

import { BooksApiActions } from './books.actions';
import { Book } from '../../book-list/books.model';
import { CollectionActions } from '../collection/collection.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);


/**
 * What is an NgRx feature?
There are three main building blocks of global state management with @ngrx/store: actions, reducers, and selectors. For a particular feature state, we create a reducer for handling state transitions based on the dispatched actions and selectors to obtain slices of the feature state. Also, we need to define a feature name needed to register the feature reducer in the NgRx store. Therefore, we can consider the NgRx feature as a grouping of the feature name, feature reducer, and selectors for the particular feature state.

Using feature creator
The createFeature function reduces repetitive code in selector files by generating a feature selector and child selectors for each feature state property. It accepts an object containing a feature name and a feature reducer as the input argument:
 */

interface State {
  books: Book[];
  loading: boolean;
}
 
const initialFeatureState: State = {
  books: [],
  loading: false,
};


export const booksFeature = createFeature({
  name: 'books',
  reducer: createReducer(
    initialFeatureState,
    on(CollectionActions.pageLoaded, (state) => ({
      ...state,
      loading: true,
    })),
    on(BooksApiActions.booksListLoaded, (state) => ({
      ...state,
      loading: true,
    }))
  ),
});
 
export const {
  name, // feature name
  reducer, // feature reducer
  selectBooksState, // feature selector
  selectBooks, // selector for `books` property
  selectLoading, // selector for `loading` property
} = booksFeature;