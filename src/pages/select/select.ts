import { Component } from '@angular/core';


@Component({
    templateUrl: 'select.html'
})
export class SelectPage {
    gaming: string = "n64";
    gender: string = "f";
    os: string;
    music: string;
    month: string;
    year: number;

    items;
    result: string;

    musicAlertOpts: { title: string, subTitle: string };

    constructor() {

        this.result = this.month;

        this.musicAlertOpts = {
            title: '1994 Music',
            subTitle: 'Select your favorite'
        };

        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.items = characters;
    }

    itemSelected(item: string) {
        console.log("item:", item);
    }

    stpSelect() {
        console.log('STP selected');
    }

    stpSelect2() {
        // this.result = this.gender;
        console.log('test','test');
    }
}

