import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-edit-member',
  templateUrl: 'edit-member.html',
})
export class EditMemberPage {

  item;

  constructor(public navCtrl: NavController, params: NavParams) {
    this.item = params.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditMemberPage');
  }

  onCancel(){
    this.navCtrl.pop();
  }

}
