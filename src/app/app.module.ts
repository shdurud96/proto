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
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ModalsPage, ModalDetailPage } from '../pages/modals/modals';
import { DatabasePage } from '../pages/database/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { Camera } from '@ionic-native/camera';
import { QRcodePage } from '../pages/QRcode/QRcode';

var config = {
  apiKey: "AIzaSyDTX3dMbEsue0SrseVUORbsJYaDxw-LHg4",
  authDomain: "firstfirebase-ec98d.firebaseapp.com",
  databaseURL: "https://firstfirebase-ec98d.firebaseio.com",
  projectId: "firstfirebase-ec98d",
  storageBucket: "firstfirebase-ec98d.appspot.com",
  messagingSenderId: "245546995981"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
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
    LoadingPage,
    ModalsPage,
     ModalDetailPage,
    DatabasePage, 
    QRcodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
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
    LoadingPage,
    ModalsPage,
      ModalDetailPage,
    DatabasePage, 
    QRcodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
