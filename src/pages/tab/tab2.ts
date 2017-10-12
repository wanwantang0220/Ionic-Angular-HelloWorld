
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tab2.html',
})


export class Tab2 {

  // searchQuery: string = '';
  // items: string[];
  items;

  constructor() {
    this.initializeItems();
  }


  initializeItems() {
    this.items = ['Amsterdam', 'Bogota', 'Co', 'Ca', 'do', 'da', 'fa', 'fs', 'mm', 'mu', 'mk',
      'qa', 'qz', 'qw', 'zs', 'zv'];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}