import { Routes } from '@angular/router';
import { DetailsUserComponent } from './details-user.component';
import { EditUserComponent } from './edit-user.component';
import { NewUserComponent } from './new-user.component';

// se debe exportar la ocntante para poder iportarla en app-routing.module.ts
export const USER_ROUTES: Routes = [
    { path: 'new', component: NewUserComponent },
    { path: 'edit', component: EditUserComponent },
    { path: 'details', component: DetailsUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'new'}
];

