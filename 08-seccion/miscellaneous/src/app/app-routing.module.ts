import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { USER_ROUTES } from './components/user/user.routes';



const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { 
    path: 'user/:id', 
    component: UserComponent,
    // Aquí se enlaza el archivo de rutas hijas importado arriba
    children: USER_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},


];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


