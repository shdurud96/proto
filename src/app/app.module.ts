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
import { InputPage } from '../pages/input/input';
import { SuccessPage } from '../pages/input/success/success';
import { ListPage } from '../pages/lists/lists';
import { DetailPage } from '../pages/lists/detail/detail';
import { LoadingPage } from '../pages/loading/loading';


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
    FabPage,
    InputPage,
      SuccessPage,
    ListPage,
      DetailPage,
    LoadingPage
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
    FabPage,
    InputPage,
      SuccessPage,
    ListPage,
      DetailPage,
    LoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
