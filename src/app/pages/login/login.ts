import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';

import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed } from '@capacitor/core';
import {FCM} from 'capacitor-fcm';

const { PushNotifications } = Plugins;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username).then(response => {
        if (response) {
          this.userData.isLoggedIn().then(
            loggedIn => {
              console.log(loggedIn);
              if (loggedIn) {
                this.router.navigateByUrl('/app/tabs/dashboard');
              }
            }
          );
        }
      });
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }

  publishNotifications() {
    console.log('Initializing HomePage');

    PushNotifications.register();

    PushNotifications.addListener('registration',
      (token: PushNotificationToken) => {
        console.log(token.value);
        alert('Push registration success, token: ' + token.value);
      }
    );

    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        alert('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: PushNotificationActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }
}
