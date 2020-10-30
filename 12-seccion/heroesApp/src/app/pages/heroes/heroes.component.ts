import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes: HeroModel[] = [];
  errorMessage: string;
  status: string;

  constructor(private heroesService: HeroesService,
              private route: ActivatedRoute){ 
                
 }

  ngOnInit(): void {
    this.heroesService.listHeroes()
      .subscribe(resp => this.heroes = resp);


  }

  onDeleteHero(hero: HeroModel, idx: number){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success rounded-pill',
        denyButton: 'btn btn-danger rounded-pill',
        cancelButton: 'btn btn-light rounded-pill'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Delete',
      text: 'Are you sure to delete this record?',
      icon: 'warning',
      showDenyButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Yes',
      reverseButtons: true,
      allowOutsideClick: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    }).then(resp => {
      if (resp.isConfirmed) {
        swalWithBootstrapButtons.fire({title: 'Saved', showConfirmButton: false, icon: 'success', timer: 1500, timerProgressBar: true})
        this.heroes.slice(idx,1);

        this.heroesService.deleteHero(hero.id)
          .subscribe({
            next: () => {this.status = 'Delete Successful'},
            error: error => {
              this.errorMessage = error.message;
              console.error('There was an error', error);
            }
          });
          
          this.heroes = this.heroes.filter(h => h.id !== hero.id);

      } else if (resp.isDenied){
        swalWithBootstrapButtons.fire({title: 'Changes are not saved', showConfirmButton: false, icon: 'error', timer: 1500, timerProgressBar: true})
      }
    });
  }

}
