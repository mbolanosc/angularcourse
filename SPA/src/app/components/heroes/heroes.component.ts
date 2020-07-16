import { Component, OnInit } from '@angular/core';
import { HeroService, Heroe } from "../services/hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
 
})
export class HeroesComponent implements OnInit {
  heroes : Heroe[] = [];

  constructor( private _heroeService: HeroService) { }

  ngOnInit(): void {
    this.heroes = this._heroeService.getHeroes();
    console.log(this.heroes);

  }
}
