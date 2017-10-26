import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-work-orders',
  templateUrl: 'work-orders.html',
})
export class WorkOrdersPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkOrdersPage');
  }

}
