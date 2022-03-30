import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.page.html',
    styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

    messages;

    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.messages = this.dummy.messages;
    }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

}
