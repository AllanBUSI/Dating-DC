import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-chats',
    templateUrl: './chats.page.html',
    styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

    userList;

    constructor(private router: Router, private dummy: DummyService) {
        this.userList = this.dummy.userList;
    }

    ngOnInit() {
    }

    goToMessage() {
        this.router.navigate(['/messages']);
    }

}
