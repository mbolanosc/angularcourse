import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../services/hero.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {
  heroe:any = {};

  constructor( 
    private _activatedRoute : ActivatedRoute,
    private _heroeService : HeroService
  ) {

    this._activatedRoute.params.subscribe( params=> {
      // console.log( params );
      this.heroe = this._heroeService.getHeroe(params.id);
      console.log(this.heroe);
    });

   }

  ngOnInit(): void {
  }
}
