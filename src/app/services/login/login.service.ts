import {Injectable} from "@angular/core";
import {Subject} from 'rxjs/index';

@Injectable({
    providedIn: 'root',
})
export class LoginService {

    private login: string;
    logged = new Subject();

    constructor () {

    }

    setLogin(login: string){
        console.log("LoginService - setLogin")
        this.login = login;
        this.logged.next(login);
    }

    getLogin(): string{
        return this.login;
    }
}