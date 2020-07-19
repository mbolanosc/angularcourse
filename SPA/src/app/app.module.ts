import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//routes
import { AppRoutingModule } from './app-routing.module';

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { SearchHeroesComponent } from './components/search-heroes/search-heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

//services
import { HeroService } from "./components/services/hero.service";
import { HeroCardComponent } from './components/hero-card/hero-card.component';
// import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchHeroesComponent,
    HeroCardComponent,
    // HeroeCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
