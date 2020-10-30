import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  hero = new HeroModel();

  constructor( private heroesService: HeroesService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    if (id !== 'new') {
      this.heroesService.getHeroById(id)
        .subscribe((resp:HeroModel) => {
          console.log(resp);
          this.hero = resp;
          this.hero.id = id;
        })
    }
    
  }

  guardar(form: NgForm){
    if (form.invalid) {
      console.log('Formulario inválido');
      return;
    }
    // Swal.showLoading();
    Swal.fire({
      title: 'Wait',
      text: 'Saving data...',
      icon: 'info',
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },      
      allowOutsideClick: false
    });

    let peticion: Observable<any>; 

    if (this.hero.id) {
      peticion = this.heroesService.updateHero(this.hero);
    } else {
      peticion = this.heroesService.createHero(this.hero);
    }

    peticion.subscribe(resp =>{
      Swal.fire({
        title: this.hero.name,
        text: 'Actualización realizada',
        icon: 'success',
        showConfirmButton: false,
        timer: 2500,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },      
        allowOutsideClick: false        
      })
    })
  }
  }
