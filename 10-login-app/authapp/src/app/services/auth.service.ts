import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyAs3H7mZMsGgmEmmrji1Qi00NHlK3ciXiY';

  // crear nuevos usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor( private http: HttpClient) { }

  logOut(){

  }

  logIn(user: UserModel){
    
    const authData = {
      ...user,
      returnSecureToken : true
    };

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    );
    
  }

  registerUser(user : UserModel){
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken : true
    };

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    );
  }
}
