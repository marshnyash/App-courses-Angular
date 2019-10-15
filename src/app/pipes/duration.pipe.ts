import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  pure: true
})
export class DurationPipe implements PipeTransform {
  transform(seconds: number, args?: any): any {
    if (!seconds) {
      return;
    }
    const hours = Math.floor(seconds / (60 * 60));
    const divisorForMinutes = seconds % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const obj = {
      hours,
      minutes
    };
    return `${obj.hours}h ${obj.minutes}min`;
  }
}
