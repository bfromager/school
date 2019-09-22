import {Injectable} from "@angular/core";
import {Subject} from 'rxjs/index';

@Injectable({
    providedIn: 'root',
})
export class ListService {

    initialized = new Subject();

    constructor () {

    }

    getLastList() {
        this.initialized.next();
    }
}