import { createActionGroup, props } from "@ngrx/store";

export const CollectionActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
    'Page Loaded': props<{loaded: string}>()
  },
});