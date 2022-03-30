import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    name = 'Mausam';
    gender = 'Female';
    height = '155cm';
    birthDate = '1997-06-13T12:18:51.410+05:30';
    gradation = 'Sir BPTI';
    religion = 'Not Interest';
    city = 'Bhavnagar';
    about = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus reprehenderit impedit porro repellendus?';

    isEdit = true;

    constructor() { }

    ngOnInit() {
    }


    onClick() {
        console.log(this.birthDate);
    }
}
