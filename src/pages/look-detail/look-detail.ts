import { GOODLIST_URL } from '../../providers/constants';
import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'look-detail',
    templateUrl: 'look-detail.html'
})
export class LookDetailPage {

    Image_head_Url:string;
    item;

    constructor(params: NavParams) {
        this.Image_head_Url = GOODLIST_URL;
        this.item = params.data.item;
        console.log("item  2:", this.item);
    }

}