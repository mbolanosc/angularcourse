import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchHeroesComponent } from './components/search-heroes/search-heroes.component';

const ROUTES: Routes = [
  { path: 'home' , component : HomeComponent},
  { path: 'about' , component : AboutComponent},
  { path: 'heroes' , component : HeroesComponent},
  { path: 'heroes/heroe/:id' , component : HeroeComponent},
  { path: 'results/:term' , component: SearchHeroesComponent },
  { path: '**', pathMatch: 'full', redirectTo :'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



