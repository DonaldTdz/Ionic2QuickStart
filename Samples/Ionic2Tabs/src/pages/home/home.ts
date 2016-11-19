import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {RepairPage} from '../repair/repair.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  repairPage;

  constructor(public navCtrl: NavController) {
    this.repairPage=RepairPage;
  }


}
