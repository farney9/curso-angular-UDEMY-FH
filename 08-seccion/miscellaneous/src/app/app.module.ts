import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasessComponent } from './components/clasess/clasess.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';

//Directives
import { CambioCssDirective } from './directives/cambio-css.directive';

//Routes
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailsUserComponent } from './components/user/details-user.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NgStyleComponent,
    CssComponent,
    ClasessComponent,
    CambioCssDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    DetailsUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
