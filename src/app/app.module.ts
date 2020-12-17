import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './Pages/about/about.component';
import { Error404Component } from './Pages/error404/error404.component';
import { HeroesComponent } from './Pages/heroes/heroes.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Pages/shared/navbar/navbar.component';
import { FooterComponent } from './Pages/shared/footer/footer.component';

// Importar RouterModule de @angular/router.
import { RouterModule } from '@angular/router';
// Importar la clase creada en el archivo app.routes
import { routes } from './app.routes';
// Para trabajar con formularios.
import { FormsModule } from '@angular/forms';
// Para manejar/trabajar los formularios de manera reactiva.(formularios reactivos).
import { ReactiveFormsModule } from '@angular/forms';
// Para hacer peticiones HTTP es necesario importar ClientModule.
import { HttpClientModule } from '@angular/common/http';
import { FormularioHeroesComponent } from './Pages/formulario-heroes/formulario-heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    Error404Component,
    HeroesComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FormularioHeroesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
