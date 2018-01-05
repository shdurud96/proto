import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { ButtonPage } from '../pages/button/button';
import { HomePage } from '../pages/home/home';
import { CardPage } from '../pages/card/card';
import { DatetimePage } from '../pages/datetime/datetime';
import { FabPage } from '../pages/fab/fab';
import { InputPage } from '../pages/input/input';
import { ListPage } from '../pages/lists/lists';
import { LoadingPage } from '../pages/loading/loading';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [  // sidemenu에서 나타내는 각각의 page를 navigation함.
      { title: 'Action Sheet', component: ActionSheetPage },
      { title: 'Alert Page', component: AlertPage },
      { title: 'Button Page', component: ButtonPage },
      { title: 'Home', component: HomePage },
      { title: 'Card Page', component: CardPage },
      { title: 'Datetime Page', component: DatetimePage },
      { title: 'Fab page', component: FabPage },
      { title: 'Input page', component: InputPage },
      { title: 'List page', component: ListPage },
      { title: 'Loading page', component: LoadingPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
