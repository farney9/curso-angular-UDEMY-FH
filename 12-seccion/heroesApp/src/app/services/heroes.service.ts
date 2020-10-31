import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroModel } from '../models/hero.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-37779.firebaseio.com';

  constructor( private http: HttpClient) { }

  getHeroById(id:string){
    return this.http.get(`${this.url}/heroes/${id}.json`);
  }

  listHeroes(){
    return this.http.get(`${this.url}/heroes.json`)
      .pipe(
        map( this.createheroesArray),
        delay(0)
      );
  }

  createHero( hero: HeroModel){

    return this.http.post(`${this.url}/heroes.json`, hero)
            .pipe(
              map( (resp:any) => {
                hero.id = resp.name;
                return hero;
              })
            );
  }

  updateHero( hero: HeroModel){
    // Se crea constante para romper la referencia de JavaScript y crear un nuevo objeto con todas las
    // propiedaades del hero 
    const heroTemp = {
      ...hero
    };

    delete heroTemp.id;

    return this.http.put(`${this.url}/heroes/${hero.id}.json`, heroTemp);
  }

  deleteHero( id: string){
    return this.http.delete(`${this.url}/heroes/${id}.json`);
  }



  private createheroesArray( heroesObj: object){
    const heroes: HeroModel[] = [];

    if (heroesObj === null) { return [];}

    Object.keys(heroesObj).forEach(key => {
      const hero: HeroModel = heroesObj[key];
      hero.id = key;
      heroes.push(hero);
    });
    
    return heroes;
  }
}
