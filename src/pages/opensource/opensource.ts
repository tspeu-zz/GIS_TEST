import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

// import * as ol from 'ol/source';



@Component({
  selector: 'page-opensource',
  templateUrl: 'opensource.html',
})
export class OpensourcePage {
  
    map: Map;
    source: XYZ;
    layer: TileLayer;
    view: View;
    

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OpensourcePage');

//*********** */
    new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: [6.661594, 50.433237],
        zoom: 4
      })
    });

    
    // this.source = new XYZ({
    //   // Tiles from Mapbox (Light)
    //   url: 'https://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    // });

    // this.layer = new TileLayer({
    //   source: this.source
    // });

    // this.view = new View({
    //   center: this.ol.
    //   // fromLonLat([6.661594, 50.433237]),
    //   zoom: 3,
    // });

    // this.map = new Map({
    //   target: 'map',
    //   layers: [this.layer],
    //   view: this.view
    // });


  }

}
