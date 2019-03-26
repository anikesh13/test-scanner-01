import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'as'
})
export class AsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
