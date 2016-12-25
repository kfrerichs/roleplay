import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-characters',
  templateUrl: 'characters.html'
})
export class Characters {
  selectedItem: any;
  names: string[];
  items: Array<{name: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.names = ['Kadir', 'Giovanni', 'Gino', 'Feces', 'Malbalor', 'Delirius', 'Tiara', 'Cormac'];
    
    this.items = [];
    for (let i = 0; i < 8; i++) {
      this.items.push({
        name: this.names[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Characters, {
      item: item
    });
  }
}
