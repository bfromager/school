import {Injectable, OnInit} from "@angular/core";
import {Subject, Subscription} from 'rxjs/index';
import {ListService} from '../list/list.service';
import {LoginService} from '../login/login.service';

@Injectable({
    providedIn: 'root',
})
export class InitializerService {

    isInitialized = new Subject();

    private listInitialized: boolean =false;
    private listSub :Subscription = null;

    private isLogged: boolean =false;
    private loginSub :Subscription = null;

    constructor (private loginService: LoginService, private listService: ListService) {
        console.log("InitializerService - constructor");
        this.loginSub = this.loginService.logged.subscribe(()=>{this.login()});

        this.listSub = this.listService.initialized.subscribe(()=>{this.listUpdated();})
        this.listService.updateList()
    }

    login(){
        console.log("InitializerService - login");
        this.isLogged = true;
        this.setInitialized();
    }

    listUpdated(){
        console.log("InitializerService - listUpdated");
        this.listInitialized = true;
        this.setInitialized();
    }

    setInitialized(){
        if (this.getInitialized()) {
            this.isInitialized.next();
        }
    }

    getInitialized(): boolean{
        return this.listInitialized && this.isLogged;
    }
}