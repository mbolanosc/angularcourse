import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const ROUTES: Routes = [
  { path: 'home' , component : HomeComponent},
  { path: 'about' , component : AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo :'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }



