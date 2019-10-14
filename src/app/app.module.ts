import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import {Firebase} from '@ionic-native/firebase';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FcmService} from './fcm.service';

const firebase = {
  apiKey: 'AIzaSyCh7ssnPNbIO3l1c9oaYB85GW6xVtIkWEU',
  authDomain: 'cartierul-iot.firebaseapp.com',
  databaseURL: 'https://cartierul-iot.firebaseio.com',
  projectId: 'cartierul-iot',
  storageBucket: 'cartierul-iot.appspot.com',
  messagingSenderId: '738763582066',
  appId: '1:738763582066:web:bd4c88dd0e319c8d4cb0eb',
  measurementId: 'G-N1G2XJ4XD2'
}



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, VideoPlayer, NFC, Ndef, Firebase, FcmService],
  bootstrap: [AppComponent]
})
export class AppModule {}
