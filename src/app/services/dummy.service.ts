import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

    userList = [
        {
            img : 'assets/imgs/users/user1.jpg',
            name : 'Mausam',
            time : '6:00 pm',
            msg  :'I like you'
        },
        {
            img : 'assets/imgs/users/user2.jpg',
            name : 'Rahul',
            time : '5:00 pm',
            msg  :'Hi, How are you?'
        },
        {
            img : 'assets/imgs/users/user3.jpg',
            name : 'Krishna',
            time : '3:30 pm',
            msg  :'You are such a nice guy..'
        },
        {
            img : 'assets/imgs/users/user4.jpg',
            name : 'David',
            time : '12:30 pm',
            msg  :'Hey, you so cute'
        },
        {
            img : 'assets/imgs/users/user5.jpg',
            name : 'Jonh',
            time : 'Yesterday',
            msg  :'I like you'
        },
        {
            img : 'assets/imgs/users/user6.jpg',
            name : 'Mike',
            time : 'Yesterday',
            msg  :'Hi, How are you?'
        },
        {
            img : 'assets/imgs/users/user7.jpg',
            name : 'Joseph',
            time : 'Yesterday',
            msg  :'You are such a nice guy..'
        },
        {
            img : 'assets/imgs/users/user8.jpg',
            name : 'Alize',
            time : '07/05/20',
            msg  :'Hey, you so cute'
        },
        {
            img : 'assets/imgs/users/user9.jpg',
            name : 'Emma',
            time : '07/05/20',
            msg  :'I like you'
        },
        {
            img : 'assets/imgs/users/user10.jpg',
            name : 'Sophia',
            time : '05/05/20',
            msg  :'Hi, How are you?'
        },
    ];

    messages = [
        {
            side : 'left',
            msg : 'Hello'
        },
        {
            side : 'right',
            msg : 'Hii'
        },
        {
            side : 'left',
            msg : 'Are you nearby ?'
        },
        {
            side : 'right',
            msg : 'I will be there in few mins'
        },
        {
            side : 'left',
            msg : 'Ok, I am waiting at vinmark Store'
        },
        {
            side : 'right',
            msg : 'Sorry I am stuck in traffic. Please give me a moment.'
        },
        {
            side : 'left',
            msg : 'Hello'
        },
        {
            side : 'right',
            msg : 'Hii'
        },
        {
            side : 'left',
            msg : 'Are you nearby ?'
        },
        {
            side : 'right',
            msg : 'I will be there in few mins'
        },
        {
            side : 'left',
            msg : 'Ok, I am waiting at vinmark Store'
        },
        {
            side : 'right',
            msg : 'Sorry I am stuck in traffic. Please give me a moment.'
        },
    ];

    constructor() { }

}
