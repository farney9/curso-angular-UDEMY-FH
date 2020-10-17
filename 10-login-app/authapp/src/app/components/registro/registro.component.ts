import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  user: UserModel;

  constructor( private auth: AuthService) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(form: NgForm){
    if (form.invalid) { return;}

    console.log(this.user);
    // console.log(form);

    this.auth.registerUser(this.user)
      .subscribe(resp => {
        console.log(resp);
        
      }, (err) => {
        console.log(err.error.error.message);
        
      });
    
    
  }

}
