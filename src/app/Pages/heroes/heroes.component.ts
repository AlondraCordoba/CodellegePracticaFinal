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
  Heros: any = [];
  buscarH: any = [];
  ArrayHeros: any = [];
  idH: any;
  @Output() salida = new EventEmitter();


  ngOnInit(): void {
  //  this.ArrayHeros = this.heroService.getHeros();
    this.obtenerHeroes();
    console.log(this.Heros);
    console.log(this.heroe);
  }

  // tslint:disable-next-line: typedef
  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['../hero', index]);
  }

  /////////////////////////////////////SERVIDOR////////////////////////////////////////////////////////
  obtenerHeroes(){
    this.heroSerS.obtenerHeroesAct().then((data: any) => {
      this.ArrayHeros = (data);
      console.log(this.ArrayHeros);
    }).catch((error) => {
      console.log(error);
    });
  }

  obtenerHero(idHero: string){
    this.idH = idHero;
    console.log(this.idH)
    this.heroSerS.obtenerHeroe(this.idH).then((data:any) => {
      this.Heros = data;
      console.log(this.Heros)
    }).catch((error) => {
      console.log(error);
    });
  }

  
  obtenerId( idHero: string){
    this.idH = idHero;
    console.log(this.idH)
  }

  actualizarHeroe(){
    this.heroSerS.actualizarHeroe(this.heroe, this.idH).then((data: any) => {
      this.heroe=data;
      Toast.fire(data.msg, '', 'success')
      this.salida.emit();
    }).catch((error: any) => {
      Toast.fire(error.error.msg, '', 'error');
      this.salida.emit();
    })
      console.log(this.heroe);
  }
  
  
  eliminarHeroe(){
    this.heroSerS.eliminarHeroe(this.idH).then((data: any) => {
      this.heroe = data;
      Toast.fire(data.msg, '', 'success');
      this.salida.emit();
      console.log(this.heroe);
    }).catch( (error) => {
      Toast.fire(error.error.msg, '', 'error');
      console.log(error)
      this.salida.emit();
    })
  }

buscarHeroe(heroe){
  this.heroSerS.buscarHeroe(heroe).then((data: any) =>{
    this.buscarH = data;
    Toast.fire(data.message, '', 'success');
    this.salida.emit();
    console.log(this.buscarH)
  }).catch( (error) => {
    Toast.fire(error.error.message, '', 'error');
    console.log(error)
    this.salida.emit();
  })
}

}
