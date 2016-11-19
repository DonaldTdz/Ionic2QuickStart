import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the RepairDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-repair-detail',
  templateUrl: 'repair-detail.html'
})
export class RepairDetailPage {

  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('Hello RepairDetailPage Page');
  }

}
