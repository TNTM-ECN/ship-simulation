import { Pipe, PipeTransform } from "@angular/core";

/*
 * Takes a string representing a unit to html representation
 */
@Pipe({name: 'unit'})
export class UnitPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (value ==='m^2'){
      return "m<sup>2</sup>"
    } else {return value}
  }
}
