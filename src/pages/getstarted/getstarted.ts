import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GetstartedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-getstarted',
  templateUrl: 'getstarted.html',
})
export class GetstartedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	let pageType = navParams.get('pageType');
    console.log(pageType);
  }

  ionViewDidLoad() {

  }

}
