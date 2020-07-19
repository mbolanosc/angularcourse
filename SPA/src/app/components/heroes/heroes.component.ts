import { Component, OnInit } from '@angular/core';
import { HeroService, Heroe } from "../services/hero.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
 
})
export class HeroesComponent implements OnInit {
  heroes : Heroe[] = [];

  constructor( 
    private _heroeService: HeroService,
    private _router : Router
    
    ) { }

  ngOnInit(): void {
    this.heroes = this._heroeService.getHeroes();
  }

  heroeDetail(idx:number){
    this._router.navigate(['heroes/heroe',idx]);
  }
}
