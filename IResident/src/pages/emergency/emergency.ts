import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';

@Component({
    selector: 'page-emergency',
    templateUrl: 'emergency.html',
})
export class EmergencyPage {

    constructor(
        public navCtrl: NavController, 
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController,
        private geo: Geolocation,
        private callNumber: CallNumber) {
    }

    showMsg(title, msg) {
        let alert = this.alertCtrl.create({
          title: title,
          message: msg,
          buttons: ['OK']
        });
        alert.present();
      }

    shareLocation(){
        const loading = this.loadingCtrl.create({
            content: 'sharing location ...'
        });

        loading.present();

        this.geo.getCurrentPosition().then(pos => {
            let msg = '<p>Latitude: ' + pos.coords.latitude + '</br>Longitude: ' + pos.coords.longitude + '</p>';
            
            loading.dismiss();
            this.showMsg('Location sent', msg);
        });
    }

    callNr(phoneNumber){
        this.callNumber.callNumber(phoneNumber, true)
            .then(() => console.log('Launched dialer!'))
            .catch(() => console.log('Error launching dialer'));
    }

}
