import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

import { PostProvider } from './providers/post-provider';
import { IonicStorageModule } from '@ionic/Storage';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { ModalpopupPageModule } from './modalpopup/modalpopup.module';
import { UpdatemodalpopupPageModule } from './updatemodalpopup/updatemodalpopup.module';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  	BrowserModule,
  	HttpClientModule,
    IonicStorageModule.forRoot(), 
  	IonicModule.forRoot(),  
    AppRoutingModule,
    ModalpopupPageModule,
    UpdatemodalpopupPageModule
  	],
  providers: [
    StatusBar,
    PostProvider,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Dialogs
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
