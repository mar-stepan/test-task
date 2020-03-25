import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthFormComponent} from './auth-form/auth-form.component';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {
}
