import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  goToWelcome() {
  	this.navCtrl.push(WelcomePage);
  }

}
