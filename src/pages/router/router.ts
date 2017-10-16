import { NavParams } from 'ionic-angular';
import { Params } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';


@Component({
    templateUrl: 'router.html'
})
export class RouterPage {

    constructor(private location: Location, param: NavParams) {
        param.data;
    }
    goBack(): void {
        this.location.back();
    }
}