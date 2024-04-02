import { Routes } from '@angular/router';
import { LoginFormComponent, RegistrationFormComponent } from './shared/components';

export const routes: Routes = [
    { path: '/login', component: LoginFormComponent},
    { path: '/registration', component: RegistrationFormComponent}
];
