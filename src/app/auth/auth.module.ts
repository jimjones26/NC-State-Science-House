import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }     from '@angular/common';

import { authRouting } from './auth.routes';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    authRouting,
    FormsModule,
    CommonModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    ResetPasswordComponent
  ]
})
export class AuthModule { }
