import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.services';
import { HeroesComponent } from '../heroes/heroes.component';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  // @Input() index:number;
  // @Input() heroe:any = {};
  heroes: any[] = [];
  termino: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private _router: Router) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {

      this.termino = params['termino'];

      this.heroes = this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    })
  }

  verHeroe(idx:number) {
    // console.log(this.index);
    this._router.navigate(['/heroe', idx]); 
  }

}
