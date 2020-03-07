import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculadora'
})
export class CalculadoraPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
