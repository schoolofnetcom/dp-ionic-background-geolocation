import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundGeolocationConfig, BackgroundGeolocation, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private backgroundGeolocation: BackgroundGeolocation) {

  }

  ionViewDidLoad() {
    this.getLocation();
  }

  getLocation() {
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      interval: 5000,
      debug: true,
      stopOnTerminate: false,
    }

    this.backgroundGeolocation.configure(config)
      .subscribe((location: BackgroundGeolocationResponse) => {
        console.log(location);
      });

    this.backgroundGeolocation.start();
    // this.backgroundGeolocation.sttop();
  }

}
