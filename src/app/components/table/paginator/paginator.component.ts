import { Component, EventEmitter, Input, Output, signal } from "@angular/core";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  standalone: false
})
export class PaginatorComponent {
  pageCount = 0;

  @Input()
  paginationIndex = 1;

  @Input()
  set numberOfPages(input: number) {
    this.pageCount = Math.ceil(input);
  };

  @Output()
  paginateTo = new EventEmitter<number>();

  paginate = (toPage: number): void => {
    this.paginationIndex = toPage;
    this.paginateTo.emit(this.paginationIndex)
  }
}
