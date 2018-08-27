import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as Leaflet from 'leaflet';
import 'leaflet-draw';

  declare const L: any; 

@Component({
  selector: 'page-leaflet-map',
  templateUrl: 'leaflet-map.html',
})
export class LeafletMapPage {

  map: any;
  data: any;
  estado: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LeafletMapPage');
    this.drawMap();
  }

  drawMap(): void {
    this.map = Leaflet.map('map').setView([-0.1836298, -78.4821206], 13);
    Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'AppTuto',
      maxZoom: 18
    }).addTo(this.map);


    var map = this.map;

  //web location
    map.locate({ setView: true});

  //when we have a location draw a marker and accuracy circle
    function onLocationFound(e) {
      var radius = e.accuracy / 2;

      Leaflet.marker(e.latlng).addTo(map)
        .bindPopup("Estás dentro de los " + radius + "metros desde este punto").openPopup();

      Leaflet.circle(e.latlng, radius).addTo(map);
    }
    map.on('locationfound', onLocationFound);

    //alert on location error
    function onLocationError(e) {
      alert(e.message);
      }

      this.map.on('locationerror', onLocationError);
  }

}
