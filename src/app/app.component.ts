import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {InitializerService} from './services/initializer/intializer.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
          title: 'Debug',
          url: '/debug',
          icon: 'bug'
    }
  ];

  private initialized = false;
  private initializeSub :Subscription = null;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private initializerService: InitializerService
  ) {
      this.initializeApp();
      this.initializeSub = this.initializerService.isInitialized.subscribe(()=>{this.onInitialized();});
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onInitialized() {
      console.log("AppComponent - onInitialized")
      this.initialized = true;
  }
}
