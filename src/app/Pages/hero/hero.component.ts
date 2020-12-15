import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService } from '../../Services/heroes/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  hero:any = {};

  constructor( private aRoute:ActivatedRoute, private _heroService:HeroesService) {
    this.aRoute.params.subscribe(params =>{
      console.log(params);
      this.hero = this._heroService.getHero(params['id'])
      console.log(this.hero);
    })
   }

  ngOnInit(): void {
  }
}
