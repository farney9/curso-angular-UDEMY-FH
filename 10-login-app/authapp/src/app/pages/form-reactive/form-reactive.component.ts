import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/services/validators.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styles: [
  ]
})
export class FormReactiveComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder,
               private validator: ValidatorsService) { 
    this.createForm();
    this.uploadDataToForm();
    this.createListeners();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.form = this.fb.group({
      // definición de un form control
      // ['valorPorDefecto', validadoresSincronos, validadoresAsincronos]
      name    : ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(5), this.validator.isJimenez]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      email   : ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],

      passwords: this.fb.group(
        {
          password: ['', [Validators.required, Validators.minLength(6)]], 
          passwordComfirm: ['', [Validators.required, Validators.minLength(6)]]
        } 
      ),
      address : this.fb.group(
        {
          departamento: ['', [Validators.required, Validators.minLength(2)] ],
          ciudad: ['', Validators.required, ]
        }
      ),
      hobbies : this.fb.array([])
    }, { validators: this.validator.MatchPassword}
    );
  }
  
  createListeners(){
    this.form.valueChanges.subscribe( valor => {
      console.log(valor);
    })

    this.form.statusChanges.subscribe(status => {
      console.log(status);
      
    })
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
  get username() { return this.form.get('username'); }
  get password() { return this.form.get('passwords.password'); }
  get passwordComfirm() { return this.form.get('passwords.passwordComfirm'); }
  get departamento() { return this.form.get('address.departamento'); }
  get ciudad() { return this.form.get('address.ciudad'); }
  get hobbies() { return this.form.get('hobbies') as FormArray; }

}
