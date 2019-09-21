import { Component } from '@angular/core';
import {LoginService} from '../services/Login/login.service';
import {InitializerService} from '../services/initializer/intializer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
      private loginService: LoginService,
      private initializerService: InitializerService
  ) {}

  setLogin() {
      this.loginService.setData('ratatoune');
      this.initializerService.setInitialized();
  }
}
