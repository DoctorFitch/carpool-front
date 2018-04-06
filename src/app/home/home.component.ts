import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  marker: any;
  currentLong: any;
  currentLat: any;
  isTracking: boolean;

  @ViewChild('gmap') gmapElement: any;
  map: any;

  constructor(private router: Router) { }

  // ! init object map with a default location and some parameters for good render
  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(document.getElementById('gmap'), mapProp);
    this.findMe();
  }

  // ! display position on map and place marker
  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'Got you!'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

  // ! use location of navigator
  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  // ! redirect user on login with parameter like : conductor / login to know wich view display after log
  goLogin(e) {
    this.router.navigate(['/login', { type: e }]);
  }
}
