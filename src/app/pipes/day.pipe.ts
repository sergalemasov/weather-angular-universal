import { Pipe, PipeTransform } from '@angular/core';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

@Pipe({name: 'auDay'})
export class DayPipe implements PipeTransform {
  public transform(epochDateSeconds: number): string {
    if (!epochDateSeconds) {
      return '';
    }

    const date = new Date(epochDateSeconds * 1000);
    const now = new Date();

    if (date.toDateString() === now.toDateString()) {
      return 'Today'
    }

    return days[date.getDay()];
  }
}
