import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, isHidden: boolean = true): string {
    return (isHidden) ? '*'.repeat(value.length): value;
  }

}
