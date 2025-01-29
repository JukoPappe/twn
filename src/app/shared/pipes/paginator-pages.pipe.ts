import { Pipe, PipeTransform } from '@angular/core';
import { MAX_PAGINATOR_ELEMENTS } from "../model/table";

@Pipe({
  name: 'paginatorPages',
  standalone: false
})
export class PaginatorPagesPipe implements PipeTransform {
  transform(numberOfPages: number, page: number): number[] {
    const fullPagesList = [...Array(numberOfPages).keys()].map(x => ++x);
    let currentPages: number[] = fullPagesList;
    if (numberOfPages > 5) {
      if (page <= 3) {
        currentPages = fullPagesList.splice(0, MAX_PAGINATOR_ELEMENTS);
      } else if (page > numberOfPages - 3) {
        currentPages = fullPagesList.splice(numberOfPages - MAX_PAGINATOR_ELEMENTS, MAX_PAGINATOR_ELEMENTS);
      } else {
        currentPages = fullPagesList.splice(page - 3, MAX_PAGINATOR_ELEMENTS)
      }
    }
    return currentPages;
  }
}
