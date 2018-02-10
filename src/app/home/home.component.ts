import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'app/core';

declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  directionsService;
  directionsDisplay;
  haight = new google.maps.LatLng(37.7699298, -122.4469157);

  // itinary details
  start = '';
  end = '';
  routeDetails;

  constructor(public _googleService: NavigationService) {
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsService = new google.maps.DirectionsService();
  }

  ngOnInit() {
    const mapOptions = {
      zoom: 14,
      center: this.haight
    };
    const map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
    this.directionsDisplay.setMap(map);
  }

  itinary() {
    this._googleService.findRoute(this.start, this.end).subscribe(result => {
      this.routeDetails = {
        distance: result.routes[0].legs[0].distance.text,
        duration: result.routes[0].legs[0].duration.text
      };
      this.directionsDisplay.setDirections(result);
    });
  }

}
