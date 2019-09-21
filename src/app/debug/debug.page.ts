import { Component, OnInit } from '@angular/core';
import {VocalService} from '../services/vocal/vocal.service';

@Component({
    selector: 'app-debug',
    templateUrl: 'debug.page.html',
    styleUrls: ['debug.page.scss']
})
export class DebugPage implements OnInit {
    constructor(private vocalService: VocalService
    ) {
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


}
