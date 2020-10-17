import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();
  rememberMe = false;

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email');
      this.rememberMe = true;
    }
  }

  logIn(form: NgForm){
    
    if (form.invalid) { return;}

    Swal.fire({
      text: 'Espere por favor...',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();
    
    this.auth.logIn(this.user)
      .subscribe( resp => {
        console.log(resp);
        form.reset();
        Swal.close()

        if (this.rememberMe) {
          localStorage.setItem('email', this.user.email);
        }

        this.router.navigateByUrl('/home');

      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: 'Error de autenticación',
          icon: 'error',
          text: err.error.error.message,
          allowOutsideClick: false
        });
      });

  }

  onSubmit(form: NgForm){

    // console.log('Formulario enviado');
    // console.log(this.user);
    // console.log(form);
    
    
  }

}
