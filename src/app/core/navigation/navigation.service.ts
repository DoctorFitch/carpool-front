import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

import { Observable } from 'rxjs/Rx';

declare var google: any;  // globale declaration of the google namespace

@Injectable()
export class NavigationService {

  constructor() { }

  public distance(start: string, end: string): Observable<any> {
    /* instance of the direction service */
    const directionsService = new google.maps.DirectionsService();
    /* the request options as described by the object */
    const request = {
      origin: start,
      destination: end,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    /* return an observable of promise */
    return Observable.fromPromise(new Promise((resolve, reject) => {
      directionsService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          /* if the status is ok get the distance */
          const distance = parseInt(response.routes[0].legs[0].distance.value, 10); // the distance is in meters, inspect .text if you want
          // a human readable format
          resolve((distance / 1000 + (distance % 1000) * (0.001)) + 'KM'); // conversion to KM
        } else {
          /* customize the error to your liking */
          reject({ error: true });
        }
      });
    }));
  }

  public findRoute(start: string, end: string): Observable<any> {

    /* instance of the direction service */
    const directionsService = new google.maps.DirectionsService();

    /* the request options as described by the object */
    const request = {
      origin: start,
      destination: end,
      travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    /* return an observable of promise */
    return Observable.fromPromise(new Promise((resolve, reject) => {
      directionsService.route(request, function (response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          resolve(response);
        } else {
          /* customize the error to your liking */
          reject({ error: true });
        }
      });
    }));
  }
}
