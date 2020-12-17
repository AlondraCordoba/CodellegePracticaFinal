import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { HeroesComponent } from './Pages/heroes/heroes.component';
import { HeroComponent } from './Pages/hero/hero.component';
import { AboutComponent } from './Pages/about/about.component';
import { BuscadorComponent } from './Pages/buscador/buscador.component';
import { Error404Component } from './Pages/error404/error404.component';
import { FormularioHeroesComponent } from './Pages/formulario-heroes/formulario-heroes.component';


export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'heroes', component: HeroesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'hero/:id', component: HeroComponent},
    {path: 'results/:termino', component: BuscadorComponent},
    {path: 'formHeroes', component:FormularioHeroesComponent}
    //{path: '**', component: Error404Component}
]
