import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import {FCM} from '@ionic-native/fcm/ngx';

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
    public router: Router,
    public fcm: FCM
  ) { }

  onLogin(form: NgForm) {
    this.submitted = true;
    this.fcm.getToken().then(token => {
      console.log('FCM TOKEN: ' + token);
    });

    if (form.valid) {
      this.userData.login(this.login.username);

      this.router.navigateByUrl('/app/tabs/dashboard');
    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
