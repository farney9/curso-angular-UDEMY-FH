import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent {

  isLoading: boolean;

  artista: any = {};

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) { 

    this.isLoading = true;
    
    this.router.params.subscribe( parametros =>{

      this.router.params.subscribe(params =>{

        this.getArtista( params['id']);
      })
    })
  }

  getArtista( id: string){

    this.isLoading = true;

    this.spotify.getArtist( id )
                .subscribe( artista =>{
                  console.log(artista);
                  this.artista = artista;
                  this.isLoading = false;
                })
  }
}
