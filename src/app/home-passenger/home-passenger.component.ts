import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'app/core';

declare var google: any;

// jquery
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home-passenger.component.html',
  styleUrls: ['./home-passenger.component.scss']
})

export class HomePassengerComponent implements OnInit {

  directionsService;
  directionsDisplay;
  localisation = new google.maps.LatLng(37.7699298, -122.4469157);

  // itinary details
  start = '';
  end = '';
  routeDetails;
  actualPosition: any;

  constructor(public _googleService: NavigationService) {
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    this.directionsService = new google.maps.DirectionsService();
  }

  ngOnInit() {
    const mapOptions = {
      zoom: 14,
      center: this.localisation
    };
    const map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
    this.directionsDisplay.setMap(map);
    this.findMe();

    setTimeout(() => {
      $('#modal1').modal();
    }, 0);
  }

  itinary() {
    let actualPositionCoordinates = new google.maps.LatLng(this.actualPosition.latitude, this.actualPosition.longitude);
    console.log('this.actualPosition', actualPositionCoordinates);
    this._googleService.findRoute(actualPositionCoordinates, this.end).subscribe(result => {
      this.routeDetails = {
        distance: result.routes[0].legs[0].distance.text,
        duration: result.routes[0].legs[0].duration.text
      };
      this.directionsDisplay.setDirections(result);
    });

    this.openBottomModal();
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.actualPosition = position.coords;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  openBottomModal() {
    $('#modal1').modal('open');
  }

}
