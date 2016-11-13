import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  AngularFireModule,
  FIREBASE_PROVIDERS,
  AngularFire,
  AuthMethods,
  AuthProviders
} from 'angularfire2';

import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
