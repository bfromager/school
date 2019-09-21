import {Injectable} from "@angular/core";
import {Subject} from 'rxjs/index';

@Injectable({
    providedIn: 'root',
})
export class InitializerService {

    event = new Subject();

    private initialized: boolean = false;
    constructor () {

    }

    setInitialized(){
        this.initialized = true;
        this.event.next();
    }

    getInitialized(){
        return this.initialized;
    }
}