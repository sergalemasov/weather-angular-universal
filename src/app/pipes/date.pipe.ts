import { Pipe, PipeTransform } from '@angular/core';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const suffixes = ['th', 'st', 'nd', 'rd'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novebmer', 'December'];

@Pipe({name: 'auDate'})
export class DatePipe implements PipeTransform {
  public transform(rawDate: number): string {
    if (!rawDate) {
      return '';
    }

    const date = new Date(rawDate);
    const dayName = days[date.getDay()];

    const day = date.getDate();
    const relevantDigits = (day < 30) ? day % 20 : day % 30;
    const daySuffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];

    const monthIx = date.getMonth();
    const month = months[monthIx];

    return `${dayName}, ${month} ${day}${daySuffix}`;
  }
}
