import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";


const APP_ROUTES : Routes = [
    { path: 'home', component: Component} ,
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
  


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);