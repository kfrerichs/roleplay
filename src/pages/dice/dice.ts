import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-dice',
  templateUrl: 'dice.html'
})
export class Dice {

  unmodified: number;
  open: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dice();
  }
  
  dice()
  {
    this.unmodified = this.throw_W100() + 1;
    this.open = this.unmodified;
    if (this.open <= 5)
    {
      this.open -= this.throw_W100_open_up();
    }
    if (this.open >= 96)
    {
      this.open += this.throw_W100_open_up();
    }
  }
  
  private throw_W100()
  {
    return Math.floor(Math.random() * 100); 
  }
  
  private throw_W100_open_up()
  {
    var value = this.throw_W100();
    var result = value;
    while (value >= 95)
    {
      value = this.throw_W100();
      result += value;
    }
    return result;
  }

}
