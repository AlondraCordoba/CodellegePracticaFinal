import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesSerService } from '../../../Services/heroesSer/heroes-ser.service';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 3000,
})

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _Router: Router,  private heroSerS: HeroesSerService) { }
  buscarH: any = [];
  @Output() salida = new EventEmitter();


  ngOnInit(): void {
  }
  buscarHeroe(heroe){
    this.heroSerS.buscarHeroe(heroe).then((data: any) =>{
      this.buscarH = data;
      Toast.fire(data.message, 'Dato encontrado', 'success');
      this.salida.emit();
      console.log(this.buscarH)
    }).catch( (error) => {
      Toast.fire(error.error.message, 'Dato no encontrado', 'error');
      console.log(error)
      this.salida.emit();
    })
  }

}
