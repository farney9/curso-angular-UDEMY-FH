import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
                ]
    });
  }

  guardar(){
    console.log(this.form);
    
  }

  get name() { return this.form.get('name'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }

}
