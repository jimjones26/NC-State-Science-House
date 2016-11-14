import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { appRouting } from './app.routes';
import { firebaseConfig } from './firebaseConfig';

import {
  AngularFireModule,
  FIREBASE_PROVIDERS,
  AngularFire,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
