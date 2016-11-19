import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RepairDetailPage} from './repair-detail';

@Component({
  selector: 'page-repair',
  templateUrl: 'repair.html'
})
export class RepairPage {

  repairDetailPage;
  hello:string;

  constructor(public navCtrl: NavController) {
    this.repairDetailPage=RepairDetailPage;
    let a="1aaaaa";
    this.hello=a;
  }

  ionViewDidLoad() {
    console.log('Hello RepairPage Page');
  }

}
