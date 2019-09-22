import { Component, OnInit } from '@angular/core';
import {VocalService} from '../services/vocal/vocal.service';
import {HttpService} from '../services/http/http.service';
import {ListService} from '../services/list/list.service';
import {LoginService} from '../services/login/login.service';
// import {InitializerService} from '../services/initializer/intializer.service';

@Component({
    selector: 'app-debug',
    templateUrl: 'debug.page.html',
    styleUrls: ['debug.page.scss']
})
export class DebugPage implements OnInit {
    tata: string = "tata";
    constructor(
        private vocalService: VocalService,
        private httpService: HttpService,
        private loginService: LoginService,
        //private initializerService: InitializerService
        private listService: ListService
    )
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

    getList() {
        this.tata = this.listService.getList()[0];
    }

    getLogin(){
        this.tata = this.loginService.getLogin();
    }

    init(){
        //this.initializerService.setInitialized();
    }
}
