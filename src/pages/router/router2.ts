import { Location } from '@angular/common';
import { Component } from '@angular/core';


@Component({
    templateUrl: 'router2.html'
})
export class Router2Page {

    constructor(private location: Location) {

    }
    goBack(): void {
        this.location.back();
    }
}