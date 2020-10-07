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
      'Authorization': 'Bearer BQB5ZDS2F47WXPxKszqkAHId3U56l2xJjqP5uPY6cagx6nB6DP4uVQzfl9Dl0HW5UpnODTh9mF7Qn8KDiKE'
    });
    
    return this.http.get(url, { headers});
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map( data => data['albums'].items));

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
    //                 .pipe( map( data => data['albums'].items));
  }
  
  getArtist( termino: string ){

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDd3C9bWLiQVMYDiCVWSGDRXx0SjBHSWQyCMRczC2udptu6yHBhQeN5YOSQAvJ3YRTpLingoE-BbFpl0Eg'
    // });

    return this.getQuery(`search?q=${termino}&type=artist`)
               .pipe( map( data => data['artists'].items));

    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers})
    //                 .pipe( map( data => data['artists'].items));

  }
}
