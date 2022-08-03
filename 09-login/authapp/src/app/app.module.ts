import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';

// Import the module from the SDK
import { AuthModule } from "@auth0/auth0-angular";
import { AuthButtonComponent } from './components/auth-button/auth-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'wester.us.auth0.com',
      clientId: 'nurX0qFjQRXRUYWZAU7NVMt1nkMg4hsN'
    }),    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
