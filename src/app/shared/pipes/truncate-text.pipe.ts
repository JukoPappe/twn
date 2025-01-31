import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: false
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, truncateFrom: number): string {
    const splitValue = value.slice(0, 297);
    return `${ splitValue }...`;
  }
}
