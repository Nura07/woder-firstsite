import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {
//square format
  transform(value:any, ...args: unknown[]): unknown {
    return value*value;
  }

}
