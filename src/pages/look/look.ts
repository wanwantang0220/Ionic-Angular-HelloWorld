import { LookDetailPage } from '../look-detail/look-detail';
import { NavController, NavParams } from 'ionic-angular';
import { LookService } from '../../providers/look-service';
import { Component } from '@angular/core';
import { GOODLIST_HEAD_URL } from '../../providers/constants';


@Component({
    selector: 'look',
    templateUrl: 'look.html'
})
export class LookPage {

    obj_CategorysListData = [];
    obj_GoodsListData = [];
    tabsPlacement: string = "top";
    errorMessage: string;
    Image_head_Url: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public lookservice: LookService) {
        this.Image_head_Url = GOODLIST_HEAD_URL;
    }

    ionViewDidLoad() {
        this.lookservice.getAllcategory().subscribe(
            countries => this.obj_CategorysListData = <any>countries,
            error => this.errorMessage = <any>error,
            function complete() {
            },
        );
        this.lookservice.getGoodsList().subscribe(
            countries => this.obj_GoodsListData = <any>countries,
            error => this.errorMessage = <any>error,
            function complete() {
            },
        );
    }

    selectedFriends(index) {
        console.log("Segment changed to", index);
    }

    itemSelected(item:string) {
        console.log("item 1 :", item);
        this.navCtrl.push(LookDetailPage, { item: item });
    }
}