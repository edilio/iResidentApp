import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { AlertController, LoadingController , Platform} from 'ionic-angular';

//import * as moment from 'moment';


@Injectable()
export class ApisProvider {

    public baseUrl = '/api/';
    public url: string = `${this.baseUrl}`;
    public data: any = {
        resident: {
            name: 'Matt Gilson',
            address: '9023 NW 145th St. Apt: 23',
            cityStateZip: 'Miami, FL 33023',
            photo: 'assets/imgs/mgilson.jpg'
        },
        contacts: [
            {
                type: 'Primary',
                name: 'Matt Gilson',
                relation: 'Head',
                email: 'matt@gilsonsoftware.com',
                phone: '954-345-3456'
            },
            {
                type: 'Secondary',
                name: 'Matt Gilson',
                relation: 'Head',
                email: 'matt@gmail.com',
                phone: '954-222-3452'
            },
            {
                type: 'Emergency',
                name: 'Valeria Gilson',
                relation: 'Spouse',
                email: 'valeria@gilsonsoftware.com',
                phone: '954-112-3112'
            }
        ],
        members: [
            {
                name: 'Matt Gilson',
                relation: 'Head of Household',
                birthday: '12/12/1960',
                race: 'Caucasian',
                ethnicity: 'Non-Hispanic',
                language: 'English'
            },
            {
                name: 'Valeria Gilson',
                relation: 'Spouse',
                birthday: '02/20/1982',
                race: 'White',
                ethnicity: 'Hispanic',
                language: 'Spanish'
            }
        ]
    };

    public workorders = [
        {
            id: 1,
            job: 'Unclog Kitchen Sink',
            wo_date: '10/23/2017',
            status: 'pending',
            notes: '',
            area: 'Kitchen'
        },
        {
            id: 2,
            job: 'Unclog Bathtub Sink',
            wo_date: '03/18/2017',
            status: 'done',
            notes: '',
            area: 'Bathroom'
        }
    ];

    public areas = [
        {
            id: 1,
            area: 'Bathroom'
        },
        {
            id: 1,
            area: 'Ceiling'
        },
        {
            id: 1,
            area: 'Doors'
        },
        {
            id: 1,
            area: 'Electrical System'
        },
        {
            id: 1,
            area: 'Floors'
        },
        {
            id: 1,
            area: 'Hot Water Heater'
        },
        {
            id: 1,
            area: 'HVAC System'
        },
        {
            id: 1,
            area: 'Lighting'
        },
        {
            id: 1,
            area: 'Laundry Area (Room) D'
        },
        {
            id: 1,
            area: 'Outlets/Switches'
        },
        {
            id: 1,
            area: 'Patio/Porch/Balcony'
        },
        {
            id: 1,
            area: 'Smoke Detector'
        },
        {
            id: 1,
            area: 'Stairs'
        },
        {
            id: 1,
            area: 'Walls'
        },
        {
            id: 1,
            area: 'Windows'
        },
        {
            id: 1,
            area: 'Health & Safety'
        },
    ];

    constructor(
        public http: Http,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public platform: Platform) {
            //console.log(this.platform.is('core'));
            //console.log(this.platform.is('mobileweb'));
        }

    loadData() {
        return Observable.forkJoin(
            this.http.get(this.url).map((res:Response) => res.json())
        );
    }

    getData(dat){
        let loading = this.loadingCtrl.create({
                content: 'loading...',
                dismissOnPageChange: true
            });

            loading.present();

            dat.loadData()
                .subscribe(data => {

                    loading.dismiss();
                });
    }
}
