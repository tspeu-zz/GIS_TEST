import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OpensourcePage } from '../pages/opensource/opensource';
import { GeotrackingPage } from '../pages/geotracking/geotracking';
import { LeafletMapPage } from '../pages/leaflet-map/leaflet-map';

import { Vr2Page }  from '../pages/vr2/vr2';
// import {ComponentsModule } from '../components/components.module';

import {SpinningCubeComponent} from '../components/spinning-cube/spinning-cube';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    OpensourcePage, 
    GeotrackingPage, 
    LeafletMapPage 
    ,Vr2Page
    , SpinningCubeComponent
  ],
  imports: [
    BrowserModule, 
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule
    // ,ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    OpensourcePage, 
    GeotrackingPage, 
    LeafletMapPage 
    , Vr2Page
    , SpinningCubeComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation
  ]
})
export class AppModule {}
