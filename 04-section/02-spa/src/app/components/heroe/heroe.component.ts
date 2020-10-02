import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';
  

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) 
    { 
      this._activatedRoute.params.subscribe(parameters =>{
      this.heroe = this._heroesService.getHeroe(parameters['id']);
      console.log(this.heroe);
      
    })
    }

}


