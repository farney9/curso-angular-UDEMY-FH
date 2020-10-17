import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UserModel;

  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  logIn(form: NgForm){
    
    if (form.invalid) { return;}
    
    this.auth.logIn(this.user)
      .subscribe( resp => {
        console.log(resp);
      }, (err) => {
        console.log(err.error.error.message);
      });

  }

  onSubmit(form: NgForm){

    // console.log('Formulario enviado');
    // console.log(this.user);
    // console.log(form);
    
    
  }

}
