import { Component, OnInit } from '@angular/core';
import {VocalService} from '../services/vocal/vocal.service';
import {HttpService} from '../services/http/http.service';

@Component({
    selector: 'app-debug',
    templateUrl: 'debug.page.html',
    styleUrls: ['debug.page.scss']
})
export class DebugPage implements OnInit {
    tata: string = "tata";
    constructor(private vocalService: VocalService, private httpService: HttpService)
    {
    }

    ngOnInit() {
    }

    btnTextToSpeech1() {
        this.vocalService.speech("Mes mémés m'aimaient mais pas papa");
    }
    btnTextToSpeech2() {
        this.vocalService.speech("Tes laitues naissent-elle ? Si tes laitues naissent, mes laitues naitront !");
    }
    btnTextToSpeech3() {
        this.vocalService.speech("La pie niche haut, l'oie niche bas, où l'hibou niche t-il ? Neni ! L'hibout ne niche ni haut ni bas");
    }
    btnTextToSpeech4() {
        this.vocalService.speech("Un ver vert sur un verre vert en vair, l’ami l’a mis là");
    }
    btnTextToSpeech5() {
        this.vocalService.speech("Si Ré Mi La Ré Do Si, La Fa Mi Ré Do Do");
    }

    getList() : Promise<string> {
        return new Promise((resolve, reject) => {
            let url = 'https://www.bastok.fr/school/liste.php';
            console.log(url);
            this.httpService.getJsonContent(url)
                .then((data: string[]) => {
                        console.log(data);
                        if (data != null) this.tata = data[0];
                    }
                )
                .catch(
                    (error) => {
                        this.tata = error.message;
                        console.log(error);
                        reject(error)
                    }
                );
        });
    }
}
