import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date',
  standalone: false
})
export class DatePipe implements PipeTransform {
  transform(value: number): string {
    const date = new Date(value * 1000);
    const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    return `${day}.${month}.${date.getFullYear()}`;
  }
}
