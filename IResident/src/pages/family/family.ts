import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { EditMemberPage } from '../edit-member/edit-member';
//import { ApisProvider } from '../../providers/apis/apis';

import { Sim } from '@ionic-native/sim';

@Component({
  selector: 'page-family',
  templateUrl: 'family.html',
})
export class FamilyPage {

  infoType: string = 'contacts';

  constructor(
    public navCtrl: NavController,
    private sim: Sim,
    public platform: Platform) {

    if (this.platform.is('core')){
      this.sim.getSimInfo().then(
        (info) => console.log('Sim info: ', info),
        (err) => console.log('Unable to get sim info: ', err)
      );

      this.sim.hasReadPermission().then(
        (info) => console.log('Has permission: ', info)
      );

      this.sim.requestReadPermission().then(
        () => console.log('Permission granted'),
        () => console.log('Permission denied')
      );
    }
  }

  openMember(isNew, item){
    console.log('opening member ...');
    this.navCtrl.push(EditMemberPage, { item: item });
  };

  openContact(isNew, item){
    console.log('opening contact ...');
    this.navCtrl.push(EditMemberPage, { item: item });
  };



}
