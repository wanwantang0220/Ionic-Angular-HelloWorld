import { DetailPage } from '../detail/detail';
import { StartPage } from '../start/start';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'tab3.html'
})
export class Tab3 implements OnInit {

  contacts: {};
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {
  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(StartPage, characterNum);
    modal.present();
  }

  openModal2(item) {
    this.navCtrl.push(DetailPage, { item: item });
  }

  ngOnInit() {
  }

  items = [
    {
      'title': 'Angular',
      'icon': 'angular',
      'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
      'color': '#E63135'
    },
    {
      'title': 'CSS3',
      'icon': 'css3',
      'description': 'The latest version of cascading stylesheets - the styling language of the web!',
      'color': '#0CA9EA'
    },
  ];

  items2 = [
    {
      'title': 'Markdown',
      'icon': 'markdown',
      'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
      'color': '#412159'
    },
    {
      'title': 'Tux',
      'icon': 'tux',
      'description': 'The official mascot of the Linux kernel!',
      'color': '#000'
    },
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
    // this.navCtrl.push(StartPage, { item: item });
  }

  routerNavigate(id: number) {
  }
}