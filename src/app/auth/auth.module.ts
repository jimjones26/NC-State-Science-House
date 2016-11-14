import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { authRouting } from './auth.routes';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    authRouting,
    FormsModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent
  ]
})
export class AuthModule { }
