import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes : Routes = [
  {path : '' , component : LoginComponent, data: { title: 'Welcome to Vault' }},
  {path : 'home' , component : HomeComponent, data : { title : 'Business Vault'}}
];
