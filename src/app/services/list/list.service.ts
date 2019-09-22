import {Injectable} from "@angular/core";
import {Subject} from 'rxjs/index';
import {HttpService} from '../http/http.service';

@Injectable({
    providedIn: 'root',
})
export class ListService {

    initialized = new Subject();

    constructor (
        private httpService: HttpService
    ) {

    }

    updateList() {
        let url = 'https://www.bastok.fr/school/liste.php';
        // console.log(url);
        this.httpService.getJsonContent(url)
            .then((data: string[]) => {
                    console.log(data);
                    this.initialized.next();
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    }

}