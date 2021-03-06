import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

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

  onSubmit(form: NgForm){
    
    if (form.invalid) { return;}

    Swal.fire({
      text: 'Espere por favor...',
      icon: 'info',
      allowOutsideClick: false
    });

    Swal.showLoading();
    
    console.log(this.user);
    // console.log(form);

    this.auth.registerUser(this.user)
      .subscribe(resp => {
        console.log(resp);
        Swal.close()

        this.rememberMe ? localStorage.setItem('email', this.user.email): null;


        this.router.navigateByUrl('/home');
        
      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: 'SignUp Error',
          icon: 'error',
          text: err.error.error.message,
          allowOutsideClick: false
        });
        
      });
    
    
  }

}
