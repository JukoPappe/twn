import { Pipe, PipeTransform } from '@angular/core';
import { COUNTRY_CODES } from "../model/phone-numbers";

@Pipe({
  name: 'phoneNumber',
  standalone: false
})
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    let formattedNumber = value;
    COUNTRY_CODES.forEach(code => {
      if (value.includes(code)) {
        formattedNumber = `${value.substring(0, code.length)} ${value.substring(code.length, value.length)}`
      }
    });
    return formattedNumber;
  }
}
