import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroModel } from '../models/hero.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://login-app-37779.firebaseio.com';

  constructor( private http: HttpClient) { }

  creteHero( hero: HeroModel){

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
}
