import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import {
  AngularFireModule,
  FIREBASE_PROVIDERS,
  AngularFire,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBRhkRB3PeM78sKNOAqvGdEPk9xXjLz5ew',
  authDomain: 'nc-state-science-house.firebaseapp.com',
  databaseURL: 'https://nc-state-science-house.firebaseio.com',
  storageBucket: 'nc-state-science-house.appspot.com',
  messagingSenderId: '1018649605127'
};

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
    routing,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
