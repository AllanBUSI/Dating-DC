import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-person-profile',
    templateUrl: './person-profile.page.html',
    styleUrls: ['./person-profile.page.scss'],
})
export class PersonProfilePage implements OnInit {

    constructor(private router: Router, private navCtrl: NavController) { }

    ngOnInit() {
    }

    goToBack() {
        this.navCtrl.back();
    }

}
