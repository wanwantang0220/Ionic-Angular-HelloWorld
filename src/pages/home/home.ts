
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Tab1 } from '../tab/tab1';
import { Tab2 } from '../tab/tab2';
import { Tab3 } from '../tab/tab3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  tab2: any;
  tab3: any;


  constructor(public navCtrl: NavController) {
    this.tab1 = Tab1;
    this.tab2 = Tab2;
    this.tab3 = Tab3;
  }



}
