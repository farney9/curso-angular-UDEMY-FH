import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify service listo!!');
  }

  getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQC_d7wZZE7WyEl7F1OZDpurzapW-5CdFF2nehm8iMGSQqYHEy89p7SzVNAYXZtBLj0M3iB2mVNlF4hRhB4'
    });
    
    return this.http.get(url, { headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items));
  }
  
  getArtists( termino: string ){

    return this.getQuery(`search?q=${termino}&type=artist`)
               .pipe( map( data => data['artists'].items));
  }

  getArtist( id: string ){

    return this.getQuery(`artists/${ id }`);
              //  .pipe( map( data => data['artists'].items));
  }

  getTopTracksByArtist( id: string ){

    return this.getQuery(`artists/${ id }/top-tracks?market=ES`)
               .pipe( map( data => data['tracks']));

  }
  
}
