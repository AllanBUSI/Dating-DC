import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-match',
    templateUrl: './match.page.html',
    styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

    userList;
    constructor(private router: Router, private dummy: DummyService) {
        this.userList = this.dummy.userList;
    }

    ngOnInit() {
    }

    goToPersonProfile() {
        this.router.navigate(['/person-profile']);
    }

}
