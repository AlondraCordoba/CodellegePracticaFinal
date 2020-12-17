import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, NgForm} from '@angular/forms';
import { ValidationService } from '../../Services/validation/validation.service';
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
  selector: 'app-formulario-heroes',
  templateUrl: './formulario-heroes.component.html',
  styleUrls: ['./formulario-heroes.component.css']
})
export class FormularioHeroesComponent implements OnInit {

  // Variable para almacenar mi nuevo formulario.
  form: FormGroup;
  heroe: HeroeModel = new HeroeModel();
  @Output() salida = new EventEmitter();


  // Getters de los controles
  // tslint:disable-next-line: typedef
  get validNombre(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }
  // tslint:disable-next-line: typedef
  get validId(){
    return this.form.get('id').invalid && this.form.get('id').touched;
  }
  // tslint:disable-next-line: typedef
  get validCasa(){
    return this.form.get('casa').invalid && this.form.get('casa').touched;
  }
  // tslint:disable-next-line: typedef
  get validFecha(){
    return this.form.get('aparicion').invalid && this.form.get('aparicion').touched;
  }
  // tslint:disable-next-line: typedef
  get validBio(){
    return this.form.get('bio').invalid && this.form.get('bio').touched;
  }

  constructor( private fb: FormBuilder, private CustomVal: ValidationService, private heroSerS: HeroesSerService) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  createForm(){
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4)] ],
      id: ['', [Validators.required, Validators.minLength(1)] ],
      casa: ['', [Validators.required] ],
      aparicion:  ['', [Validators.required] ],
      bio: ['', [Validators.required] ]
    })
  }

// tslint:disable-next-line: typedef
enviar(){
  console.log(this.form);
  if (this.form.invalid){
      return Object.values( this.form.controls).forEach(control => {
        if (control instanceof FormGroup){
          return Object.values(control.controls).forEach (control => control.markAsTouched());
        }else{
          control.markAsTouched();
        }
          });
  }
}
//////////////////////////////////////SERVIDOR/////////////////////////////////////
registrarHeroe(form: NgForm){
  this.heroSerS.registrarHeroe(this.heroe).then((resp: any) => {
    Toast.fire(resp.message, '', 'success');
    this.salida.emit();
    console.log(this.heroe);
    this.form.reset();
  }).catch((error) => {
    console.log(error);
    Toast.fire(error.console.error.message, '', 'error');
    this.salida.emit();
  });
}


}
