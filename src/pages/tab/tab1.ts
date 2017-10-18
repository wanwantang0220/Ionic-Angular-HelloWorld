import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';

@Component({
  template: `
  <ion-content>
  <button ion-button secondary menuToggle>Toggle Menu</button>
  Tab 11111</ion-content>`
})
export class Tab1 {

  constructor(private storage: Storage) {
    storage.set('name', 'Max');
    
    storage.get('name').then((val)=>{
      console.log('Your name is', val);
    });
  }

  


}