import { ActionReducerMap } from "@ngrx/store";
import { Book } from "../book-list/books.model";
import { booksReducer } from "./books.reducer";
import { collectionReducer } from "./collection.reducer";

interface AppState {
  books: Readonly<Book[]>,
  collection: Readonly<string[]>
};

export const reducers: ActionReducerMap<AppState> = { 
  books: booksReducer, 
  collection: collectionReducer
};