import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, trigger : boolean = true): string {

    return ( trigger ) ? '*'.repeat( value.length ): value;
  }

}
