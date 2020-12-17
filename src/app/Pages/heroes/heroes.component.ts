import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../Services/heroes/heroes.service';
import { HeroeModel } from '../../Models/heroes';
import { HeroesSerService } from '../../Services/heroesSer/heroes-ser.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
})


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private heroService: HeroesService, private _aRouter: Router, private heroSerS: HeroesSerService) {
  }
  heroe: HeroeModel = new HeroeModel();
  Heros: any[] = [];
  ArrayHeros: any = [];
  @Input() idH: number;
  @Input() hero: number;
  @Output() salida = new EventEmitter();


  ngOnInit(): void {
  //  this.ArrayHeros = this.heroService.getHeros();
    this.obtenerHeroes();
  }

  // tslint:disable-next-line: typedef
  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['../hero', index]);
  }

  /////////////////////////////////////SERVIDOR////////////////////////////////////////////////////////
  obtenerHeroes(){
    this.heroSerS.obtenerHeroes().then((data: any) => {
      this.ArrayHeros = (data);
      console.log(this.ArrayHeros);
    }).catch((error) => {
      console.log(error);
    });
  }

  obtenerId( idHero: number){
    this.idH = idHero;
    console.log(this.idH)
  }


}
