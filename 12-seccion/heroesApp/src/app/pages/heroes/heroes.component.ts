import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: HeroModel[] = [];

  constructor(private heroesService: HeroesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.heroesService.listHeroes()
      .subscribe(resp => this.heroes = resp);
  }

}
