import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WorkorderPage } from '../workorder/workorder';
import { ApisProvider } from '../../providers/apis/apis';

@Component({
    selector: 'page-work-orders',
    templateUrl: 'work-orders.html',
})
export class WorkOrdersPage {

    workorders;

    constructor(
        public navCtrl: NavController,
        public data: ApisProvider) {
            this.workorders = data.workorders;
    }

    // ionViewDidLoad() {
    //     console.log('ionViewDidLoad WorkOrdersPage');
    // }

    openWorkOrder(wo){
        if (wo === undefined){
            wo = {
                job: '',
                notes: '',
                area: ''
            }
        }

        this.navCtrl.push(WorkorderPage, { item: wo });
    }

}
