import { Pipe, PipeTransform } from '@angular/core';
import { Article } from "../model/article";

@Pipe({
  name: 'paginate',
  standalone: false
})
export class PaginatePipe implements PipeTransform {
  transform(list: Article[], page: number): Article[] {
    const endIndex = 10 * page;
    const startIndex = endIndex - 10;
    console.log(list.slice(startIndex, endIndex));
    console.log(list);
    return list.slice(startIndex, endIndex);
  }
}
