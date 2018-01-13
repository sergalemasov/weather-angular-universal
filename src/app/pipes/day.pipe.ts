import { Pipe, PipeTransform } from '@angular/core';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

@Pipe({name: 'auDay'})
export class DayPipe implements PipeTransform {
  public transform(rawDate: number): string {
    if (!rawDate) {
      return '';
    }

    const date = new Date(rawDate);
    const now = new Date();

    if (date.toDateString() === now.toDateString()) {
      return 'Today'
    }

    return days[date.getDay()];
  }
}
