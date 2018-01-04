import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { ButtonPage } from '../pages/button/button';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackgroundImageCardsPage } from '../pages/card/bg-cards/bg-cards';
import { SocialCardsPage } from '../pages/card/social-cards/social-cards';
import { CardPage } from '../pages/card/card';
import { DatetimePage } from '../pages/datetime/datetime';
import { FabPage } from '../pages/fab/fab';

@NgModule({
  declarations: [
    MyApp,
    ActionSheetPage,  //반드시 등록 해주어야 함.
    AlertPage,
    ButtonPage,
    HomePage,
    CardPage,
      BackgroundImageCardsPage,
      SocialCardsPage,
    DatetimePage,
    FabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActionSheetPage,
    AlertPage,
    ButtonPage,
    HomePage,
    CardPage,
      BackgroundImageCardsPage,
      SocialCardsPage,
    DatetimePage,
    FabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
