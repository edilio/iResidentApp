import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
    selector: 'page-workorder',
    templateUrl: 'workorder.html',
})
export class WorkorderPage {

    workorder;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.workorder = navParams.data.item;
    }

    ionViewDidLoad() {
        //console.log('ionViewDidLoad WorkorderPage');
    }

    goBack(){
        this.navCtrl.pop();
    }

}
