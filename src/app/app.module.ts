import { InputPage } from '../pages/input/input';
import { Router2Page } from '../pages/router/router2';
import { RouterPage } from '../pages/router/router';
import { LookDetailPage } from '../pages/look-detail/look-detail';
import { LookService } from '../providers/look-service';
import { LookPage } from '../pages/look/look';
import { SelectPage } from '../pages/select/select';
import { DetailPage } from '../pages/detail/detail';
import { ContactService } from './contact.service';
import { rootRouterConfig } from './app.routes';
import { StartPage } from '../pages/start/start';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { Tab3 } from '../pages/tab/tab3';
import { Tab2 } from '../pages/tab/tab2';
import { Tab1 } from '../pages/tab/tab1';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Tab1,
    Tab2,
    Tab3,
    StartPage,
    DetailPage,
    SelectPage,
    LookPage,
    LookDetailPage,
    RouterPage,
    Router2Page,
    InputPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot(rootRouterConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Tab1,
    Tab2,
    Tab3,
    StartPage, 
    DetailPage,
    SelectPage,
    LookPage,
    LookDetailPage,
    RouterPage,
    Router2Page,
    InputPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService,
    LookService
  ]
})
export class AppModule {}
