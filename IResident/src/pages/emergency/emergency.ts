import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';

@Component({
    selector: 'page-emergency',
    templateUrl: 'emergency.html',
})
export class EmergencyPage {

    constructor(
        public navCtrl: NavController, 
        private geo: Geolocation,
        private callNumber: CallNumber) {
    }

    shareLocation(){
        this.geo.getCurrentPosition().then(pos => {
            console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
          });
    }

    callNr(phoneNumber){
        this.callNumber.callNumber(phoneNumber, true)
            .then(() => console.log('Launched dialer!'))
            .catch(() => console.log('Error launching dialer'));
    }

}
