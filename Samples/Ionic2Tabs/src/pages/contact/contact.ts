import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { RepairDetailPage } from '../repair/repair.module';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  repairDetailPage;

  constructor(public navCtrl: NavController) {
    this.repairDetailPage=RepairDetailPage;
  }

}
