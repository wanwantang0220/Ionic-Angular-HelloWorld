import { Component } from '@angular/core';


@Component({
    templateUrl: 'input.html'
})

export class InputPage {

    values = "";
    flags = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    constructor() {
    }

    addFlag(newFlag: string) {
        if (newFlag) {
            this.flags.push(newFlag);
        }
    }

    onKey(values: string) {
        this.values += values + '|';
    }
}