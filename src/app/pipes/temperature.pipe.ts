import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'auTemperature'})
export class TemperaturePipe implements PipeTransform {
  public transform(rawTemperature: number): number {
    if (!rawTemperature) {
      return;
    }

    return Math.round(rawTemperature);
  }
}
