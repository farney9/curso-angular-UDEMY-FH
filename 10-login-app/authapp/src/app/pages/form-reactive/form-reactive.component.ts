import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styles: [
  ]
})
export class FormReactiveComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder) { 
    this.createForm();
    this.uploadDataToForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.form = this.fb.group({
      // definición de un form control
      // ['valorPorDefecto', validadoresSincronos, validadoresAsincronos]
      name    : ['', 
                    [
                      Validators.required, 
                      Validators.minLength(2)
                    ]
                ],
      lastName: ['', 
                    [
                      Validators.required, 
                      Validators.minLength(5)
                    ]
                ],
      email   : ['', 
                    [
                      Validators.required, 
                      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
                    ],
                ],
      address : this.fb.group({
                departamento: ['', [Validators.required, Validators.minLength(2)] ],
                ciudad: ['', Validators.required, ]
      }),
      hobbies : this.fb.array([])
    });
  }

  addHobbie(){
    this.hobbies.push(this.fb.control('', Validators.required));
  }
  
  deleteHobbie(idx: number){
    this.hobbies.removeAt(idx);

  }

  uploadDataToForm(){
    this.form.reset({
      name: 'Farney',
      lastName: 'Jiménez',
      email: 'farmey9@yopmail.com',
      address : {
        departamento: 'Antioquia',
        ciudad: 'Itagui'
      }
    })
  }

  guardar(){
    console.log(this.form);
    
  }

  get name() { return this.form.get('name'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get departamento() { return this.form.get('address.departamento'); }
  get ciudad() { return this.form.get('address.ciudad'); }
  get hobbies() { return this.form.get('hobbies') as FormArray; }

}
