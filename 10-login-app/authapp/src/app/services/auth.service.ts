import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyAs3H7mZMsGgmEmmrji1Qi00NHlK3ciXiY';
  userToken: string;

  // crear nuevos usuarios
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]


  // login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor( private http: HttpClient) { 
    this.loadToken();
  }

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
    ).pipe(
      map( resp => {
        // console.log('Entró en mapa de rxjs');
        
        this.saveToken(resp['idToken']);
        return resp;
      })
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
    ).pipe(
      map( resp => {
        // console.log('Entró en mapa de rxjs');
        
        this.saveToken(resp['idToken']);
        return resp;
      })
    );
  }

  private saveToken(idToken: string){
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
  }

  loadToken(){
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenticated(): boolean {

    return this.userToken.length > 2;
  }

}
