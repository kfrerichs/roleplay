import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dice',
  templateUrl: 'dice.html'
})
export class Dice {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
//    this.navCtrl.push(Dice, {
//      item: item
//    });
  }
}
