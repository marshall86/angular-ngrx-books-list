import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  // styleUrls: ['./book-list.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() add = new EventEmitter<string>();
}
