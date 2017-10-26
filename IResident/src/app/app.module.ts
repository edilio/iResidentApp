import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EmergencyPage } from '../pages/emergency/emergency';
import { WorkOrdersPage } from '../pages/work-orders/work-orders';
import { FamilyPage } from '../pages/family/family';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { EditMemberPage } from '../pages/edit-member/edit-member';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApisProvider } from '../providers/apis/apis';

import { Sim } from '@ionic-native/sim';

@NgModule({
  declarations: [
    MyApp,
    EmergencyPage,
    WorkOrdersPage,
    FamilyPage,
    SettingsPage,
    TabsPage,
    EditMemberPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      iconMode: 'ios',
      tabsHigghlight: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EmergencyPage,
    WorkOrdersPage,
    FamilyPage,
    SettingsPage,
    TabsPage,
    EditMemberPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApisProvider,
    Sim
  ]
})
export class AppModule {}
