import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : 'search', component: SearchComponent },
  { path : '', pathMatch: 'full', component: HomeComponent },
  { path : '**', pathMatch: 'full', component: HomeComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
