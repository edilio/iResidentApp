import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { ApisProvider } from '../../providers/apis/apis';


@Component({
    selector: 'page-workorder',
    templateUrl: 'workorder.html',
})
export class WorkorderPage {

    workorder;
    areas = [];

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public alertCtrl: AlertController,
        public areasData: ApisProvider) {
            this.workorder = navParams.data.item;
            this.areas = areasData.areas;
    }

    ionViewDidLoad() {
        //console.log('ionViewDidLoad WorkorderPage');
    }

    goBack(){
        this.navCtrl.pop();
    }

    showAreas() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Select Unit Area');
    
        this.areas.forEach(x => {
            alert.addInput(
                {
                    type: 'radio',
                    label: x.area,
                    value: x.area,
                    checked: this.workorder.area === x.area
                }
            );
        })
    
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                if (data) this.workorder.area = data;
            }
        });
        alert.present();
    }

}
