import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})

export class HeroCardComponent implements OnInit {
 @Input() heroe:any = {}
 @Input() index:number;

 @Output() heroSelected:EventEmitter<number>;

  constructor(
    private _router : Router,
    
  ) {
    this.heroSelected = new EventEmitter();
   }

  ngOnInit(): void {
  }

  heroeDetailCard(){
    this.heroSelected.emit(this.index);
  }

}
