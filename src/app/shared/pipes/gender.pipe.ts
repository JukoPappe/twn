import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: false
})
export class GenderPipe implements PipeTransform {
  transform(value: string): string {
    return value === "m" ? "Mees" : "Naine";
  }
}
