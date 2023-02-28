import { ActionReducerMap } from "@ngrx/store";
import { Book } from "../interfaces/books.model";
import { booksReducer } from "./books/books.reducer";
import { collectionReducer } from "./collection/collection.reducer";

export interface AppState {
  books: Readonly<Book[]>,
  collection: Readonly<string[]>
};

export const reducers: ActionReducerMap<AppState> = { 
  books: booksReducer, 
  collection: collectionReducer
};