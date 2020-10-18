import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  routeURL: string;

  constructor( private auth: AuthService,
              private router: Router) {
    this.routeURL = this.router.url;
  }
  canActivate(): boolean {
    console.log('Guard');
      if (this.auth.isAuthenticated && this.auth.islogin) {
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
  }
  
}
