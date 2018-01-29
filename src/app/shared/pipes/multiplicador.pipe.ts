import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicador'
})
export class MultiplicadorPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    let result;
    if (args) {
      result = value * args;
    } else {
      result = value * value;
    }
    return result;
  }

}
