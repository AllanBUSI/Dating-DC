import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    @ViewChild('mySlider', {static : false}) slider: IonSlides;

    slideOpts = {
      slidesPerView : 1,
      allowTouchMove: false
    };

    sliderImages = [
        'assets/imgs/girl.jpg',
        'assets/imgs/girl1.jpg',
        'assets/imgs/girl2.jpg',
        'assets/imgs/girl3.jpg',
        'assets/imgs/man.jpg',
    ];
    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToPersonProfile() {
        this.router.navigate(['/person-profile']);
    }

    goToMessages() {
        this.router.navigate(['/messages']);
    }

    goToNext() {
        this.slider.slideNext();
    }

}
