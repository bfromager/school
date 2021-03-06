import {Injectable} from "@angular/core";
import {Subject} from 'rxjs/index';
import {HttpService} from '../http/http.service';

@Injectable({
    providedIn: 'root',
})
export class ListService {

    initialized = new Subject();
    list: string[] = [];

    constructor (
        private httpService: HttpService
    ) {

    }

    updateList() {
        let url = 'https://raw.githubusercontent.com/bfromager/school/master/src/assets/liste.json';
        // console.log(url);
        this.httpService.getJsonContent(url)
            .then((data: string[]) => {
                    console.log(data);
                    this.list = data.slice();
                    this.initialized.next();
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    }

    getList(): string[] {
        return this.list;
    }

}