import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

 // transform(value: string, active: boolean = true): string {

  //   value = value.toLowerCase();
  //   let names = value.split(" ");
    
  //   //console.log(arr);

  //   if( active ){
  //     names = names.map( name =>{
  //       return name[0].toUpperCase() + name.substring(1);
  //     });
     
  
  // }

}
