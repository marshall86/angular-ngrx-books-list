import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/books.model';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  // styleUrls: ['./book-collection.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCollectionComponent {
  @Input() books: Book[] = [];
  @Output() remove = new EventEmitter<string>();
}