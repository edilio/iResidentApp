import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { AlertController, LoadingController , Platform} from 'ionic-angular';

//import * as moment from 'moment';


@Injectable()
export class ApisProvider {

  public baseUrl = this.platform.is('mobileweb') || this.platform.is('core') ? '/api/' : 'https://ethermine.org/api/miner_new/';
  public url: string = `${this.baseUrl}`;

  constructor(
    public http: Http,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public platform: Platform) {
      console.log(this.platform.is('core'));
      console.log(this.platform.is('mobileweb'));
    }


  loadData() {
    return Observable.forkJoin(
      this.http.get(this.url).map((res:Response) => res.json())
    );
  }
}
