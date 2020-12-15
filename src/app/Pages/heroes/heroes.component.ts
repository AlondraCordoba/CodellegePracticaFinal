import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from '../../Services/heroes/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private heroService: HeroesService, private _aRouter: Router) {
    console.log('Constructor de la clase(heros)');
  }
  Heros: any[] = [];
  ArrayHeros: any = [];

  ngOnInit(): void {
    this.ArrayHeros = this.heroService.getHeros();
    console.log('Evento ngOnInit (ubicado en hero)');
  }

  // tslint:disable-next-line: typedef
  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['../hero', index]);
  }



}
