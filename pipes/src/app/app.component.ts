import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'pipes';

  name:string = "Spiderman"

  array = [1,2,3,4,5,6,7,8,9,10] 

  PI:number = Math.PI;

  percent: number = 0.2435;

  salary:number = 1234.5;

  hero={
    name: "peter parker",
    keyname: "spiderman",
    age: 28,
      address:{
        city:"NY",
        nbh: "Queens"
      }
  }

}

