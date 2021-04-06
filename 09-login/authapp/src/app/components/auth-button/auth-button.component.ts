import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  template: `
  <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedIn">
      <button (click)="auth.logout({ returnTo: document.location.origin })" class="btn btn-outline-danger" type="button">
        Log out
      </button>
  </ng-container>

    <ng-template #loggedIn>
      <button (click)="auth.loginWithRedirect()" class="btn btn-outline-primary" type="button">Log in</button>
    </ng-template>
  `
})

export class AuthButtonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  ngOnInit(): void {
  }

}
