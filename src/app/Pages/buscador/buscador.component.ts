import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Services/heroes/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor( private _aRoute: ActivatedRoute, private _heroService: HeroesService) { }

  Resultados: any [];
  // strBusqueda: string = '';
  strBusqueda: '';


  // Cuando se termina de renderizar el componente.
  ngOnInit(): void {
    // Obtener parametros
    // Propiedad params (observable)
    // A todos los observables nos tenemos que suscribir
    this._aRoute.params.subscribe( params => {
      // Obtencion de parametros.
      // Saber que parametro se tiene en la ruta activa.
     // console.log(params['termino']);
     this.strBusqueda = params['termino'];
      this.Resultados = this._heroService.searchHeros(params['termino']);
      // LOG del arreglo de resultados
      console.log(this.Resultados); 
    })

  }

}
