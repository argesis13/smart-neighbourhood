# Ionic Angular Conference Application

This application is purely a kitchen-sink demo of the Ionic Framework and Angular.

**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic components in a real-world application. Please go through the steps in [CONTRIBUTING](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.


## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


## Getting Started

* [Download the installer](https://nodejs.org/) for Node.js 6 or greater.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._


## App Preview

All app preview screenshots were taken by running `ionic serve --lab` on a retina display.

- [Login Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/login/login.html)

  <img src="resources/screenshots/login.jpg" alt="Login">
  
- [Menu Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/dashboard/dashboard.page.html)

  <img src="resources/screenshots/menu.jpg" alt="Menu">
  
- [Dashboard Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/dashboard/dashboard.page.html)

  <img src="resources/screenshots/dashboard.jpg" alt="Dashboard">

- [Logs Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/logs/logs.html)

  <img src="resources/screenshots/logs.jpg" alt="Logs">

- [Cameras Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/video-player/video-player.page.html)

  <img src="resources/screenshots/cameras.jpg" alt="Cameras">
  
- [Account Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/account/account.html)

  <img src="resources/screenshots/account.jpg" alt="Account">

- [NFC Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/nfc/nfc.page.html)

  <img src="resources/screenshots/nfc.jpg" alt="NFC">

## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic integrations enable capacitor`
2. Run `ionic build`
3. Run `npx cap add ios`

### iOS

1. Run `ionic cordova run ios --prod`
