import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesSerService } from '../../Services/heroesSer/heroes-ser.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
})

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() PadreHero: any = [];
  @Input() Index: number;

  @Output() selectorHero: EventEmitter<number>;
  idH: any;
  @Output() salida = new EventEmitter();


  // tslint:disable-next-line: variable-name
  constructor( private _aRouter: Router, private heroSerS: HeroesSerService) {
    // console.log(this.PadreHero);
    this.selectorHero = new EventEmitter();
   }

  ngOnInit(): void {
  }
  
  // tslint:disable-next-line: typedef
  Navegar(){
    this._aRouter.navigate(['../hero', this.Index]);
  }

  obtenerId( idHero: number){
    this.idH = idHero;
    console.log(this.idH)
  }

 

}
