import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { Events, MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';

import { Plugins } from '@capacitor/core';
import {FCM} from 'capacitor-fcm';

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Dashboard',
      url: '/app/tabs/dashboard',
      icon: 'information-circle'
    },
    {
      title: 'Logs',
      url: '/app/tabs/logs',
      icon: 'calendar'
    },
    {
      title: 'Cameras',
      url: '/app/tabs/video-player',
      icon: 'videocam'
    },
    {
      title: 'NFC',
      url: '/app/tabs/nfc',
      icon: 'unlock'
    },
    {
      title: 'Map',
      url: '/app/tabs/map',
      icon: 'map'
    }

    // <ion-icon name="flashlight"></ion-icon>
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private events: Events,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private fcm: FCM
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();


    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: `Reload`
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  publishNotifications() {
    PushNotifications.register()
      .then(_ => {
        this.fcm
          .subscribeTo({topic: 'test'})
          .then(r => alert(`subscribed to topic`))
          .catch(err => console.log(err));
      })
      .catch(err => alert(JSON.stringify(err)));

//
// Unsubscribe from a specific topic
    this.fcm
      .unsubscribeFrom({topic: 'test'})
      .then(r => alert(`unsubscribed from topic`))
      .catch(err => console.log(err));
    this.fcm.getToken().then(token => console.log(token));
  }


  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/login');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
