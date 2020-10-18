import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {


  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService,
               private router: Router ) {

  }
  ngOnInit(): void {
  }

  exit(){
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

}
