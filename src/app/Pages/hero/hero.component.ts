import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../Services/heroes/heroes.service';
import { HeroesSerService } from '../../Services/heroesSer/heroes-ser.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero:any = {};
  idH: any;

  constructor( private aRoute:ActivatedRoute, private _heroService:HeroesService, private heroSerS: HeroesSerService) {
    this.aRoute.params.subscribe(params =>{
      console.log(params);
      this.hero = this._heroService.getHero(params['id'])
      //this.hero = this.heroSerS.obtenerHeroe(this.idH);
      console.log(this.hero);
    })
   }

  ngOnInit(): void {
  }

  obtenerId( idHero: number){
    this.idH = idHero;
    console.log(this.idH)
  }

}
