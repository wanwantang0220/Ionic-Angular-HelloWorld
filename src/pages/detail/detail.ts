import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'detail.html',
})
export class DetailPage {
    item;

    constructor(params: NavParams) {
        this.item = params.data.item;
        console.log("item:", this.item);
    }
}