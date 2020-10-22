import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styles: [
  ]
})
export class FormTemplateComponent implements OnInit {
  user = {
    name: 'Farney',
    lastName: 'Jiménez',
    email: 'farney9@yopmail.com'
  }
  constructor(private countryService: CountriesService) { }

  ngOnInit(): void {
    this.countryService.getCountries()
        .subscribe(paises => {
          console.log(paises);
          
        })
        
  }

  guardar( form: NgForm){
    console.log(form);
    console.log(form.value);
    
  }

}
