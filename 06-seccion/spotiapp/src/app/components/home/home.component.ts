import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  isLoading: boolean;

  newTracks: any[] = [];

  constructor(private spotify: SpotifyService) {

    this.isLoading = true;

    setTimeout(() => {
      
      this.spotify.getNewReleases()
          .subscribe( (data: any) => {
            // console.log(data);
            this.newTracks = data;
            this.isLoading = false;
          })
    }, 1000);

  }
}
