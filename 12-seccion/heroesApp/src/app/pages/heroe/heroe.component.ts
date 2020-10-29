import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroModel } from 'src/app/models/hero.model';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  hero = new HeroModel();

  constructor() { }

  ngOnInit(): void {
  }

  guardar(form: NgForm){
    console.log(form);
    console.log(this.hero);
  }

}
