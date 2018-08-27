import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpensourcePage } from '../opensource/opensource';
import { GeotrackingPage } from '../geotracking/geotracking';
import { LeafletMapPage } from '../leaflet-map/leaflet-map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  title : string = "Go to OpenSource Map";
  constructor(public navCtrl: NavController) {

  }

  gotoPage(page : string){
    if (page === 'OpenLayer'){
      console.log('OpenLayer got to page');
      this.navCtrl.push(OpensourcePage);
    }

    if(page === 'Geo'){
      console.log('Geotrack got to page');
      this.navCtrl.push(GeotrackingPage);
  
    }
    if(page === 'Leaflet'){
      console.log('Geotrack got to page');
      this.navCtrl.push(LeafletMapPage);
  
    }
  }

}
