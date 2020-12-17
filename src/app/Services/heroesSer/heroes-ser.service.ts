import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../../Models/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesSerService {

  constructor(private http: HttpClient) {
    console.log('HeroServiceWorks (NodeJS)');
   }

  url = `http://localhost:3000`;

  // tslint:disable-next-line: typedef
  obtenerHeroes(){
    return this.http.get(`${this.url}/heroes`).toPromise();
  }
  // tslint:disable-next-line: typedef
  obtenerHeroesAct(){
    return this.http.get(`${this.url}/heroesAct`).toPromise();
  }

  // tslint:disable-next-line: typedef
  obtenerHeroesTerm(){
    return this.http.get(`${this.url}/heroesTerm`).toPromise();
  }

  // tslint:disable-next-line: typedef
  obtenerHeroe(id: string){
    return this.http.get(`${this.url}/heroe/${id}`).toPromise();
  }

  buscarHeroe(heroe){
    return this.http.get(`${this.url}/heroe/${heroe}`).toPromise();
  }

  // tslint:disable-next-line: typedef
  registrarHeroe(heroe: HeroeModel){
    return this.http.post(`${this.url}/heroe`, heroe).toPromise();
  }

  // tslint:disable-next-line: typedef
  actualizarHeroe(heroe: HeroeModel, id: number){
    return this.http.put(`${this.url}/heroe/${id}`, heroe).toPromise();
  }

  // tslint:disable-next-line: typedef
  eliminarHeroe(id: number){
    return this.http.delete(`${this.url}/hero/${id}`).toPromise();
  }

}
