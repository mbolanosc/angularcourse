import { Component, OnInit ,Input} from '@angular/core';
import { HeroService } from "../services/hero.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html',
})
export class SearchHeroesComponent implements OnInit {
  heroes:any = [];
  searchedWord :string;
  @Input() heroe:any = {}
  @Input() index:number

  constructor(
    private _heroService : HeroService,
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe( params => {
      this.heroes = this._heroService.searchHeroes(params['term']);
      this.searchedWord = params['term'];
    })
  }
}
