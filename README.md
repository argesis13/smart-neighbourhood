# Ionic Angular Conference Application

This application is purely a kitchen-sink demo of the Ionic Framework and Angular.

**There is not an actual Ionic Conference at this time.** This project is just to show off Ionic components in a real-world application. Please go through the steps in [CONTRIBUTING](https://github.com/ionic-team/ionic-conference-app/blob/master/.github/CONTRIBUTING.md) before submitting an issue.


## Table of Contents
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [App Preview](#app-preview)
- [Deploying](#Running)
  - [Web Browser](#Web-browser)
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
  <img src="resources/screenshots/login.JPG" alt="Login">
  
- [Menu Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/dashboard/dashboard.page.html)

  <img src="resources/screenshots/menu.JPG" alt="Menu">
  
- [Dashboard Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/dashboard/dashboard.page.html)

  <img src="resources/screenshots/dashboard.JPG" alt="Dashboard">

- [Logs Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/logs/logs.html)

  <img src="resources/screenshots/logs.JPG" alt="Logs">

- [Cameras Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/video-player/video-player.page.html)

  <img src="resources/screenshots/cameras.JPG" alt="Cameras">
  
- [Account Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/account/account.html)

  <img src="resources/screenshots/account.JPG" alt="Account">

- [NFC Page](https://github.com/argesis13/smart-neighbourhood/blob/develop/src/app/pages/nfc/nfc.page.html)

  <img src="resources/screenshots/nfc.JPG" alt="NFC">

## Running

### Android & IOS

1. Run `ionic integrations enable capacitor`
2. Run `ionic build`
3. Run `npx cap add ios`
4. Run `npx cap add android`
5. Run `npx cap sync`
6. Run `npx cap copy`
7. Run `npx cap open ios`

