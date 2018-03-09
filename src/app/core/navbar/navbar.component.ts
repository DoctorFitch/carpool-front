import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthentificationCheckService } from 'app/core/services/authentification/authentification-check.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { User } from 'app/core/models/user.model';
import { Subscription } from 'rxjs';

// jquery
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  email: string;
  isAuthenticated: Observable<boolean>;
  currentUser: User;
  userSubscription: Subscription;

  constructor(
    public authSvc: AuthentificationCheckService,
    public _router: Router
  ) { }

  ngOnInit() {
    this.isAuthenticated = this.authSvc.isLoggedIn;
    // ? get user actually connected to display informations in header
    this.userSubscription = this.authSvc.currentUserObservable.subscribe(user => this.currentUser = user);
    console.log('this current user ', this.currentUser);
  }

  activeDropdown() {
    $('.dropdown-button').dropdown();
  }

  logout() {
    this.authSvc.logout();
    this._router.navigateByUrl('/login');
  }

  openProfil() {
    this._router.navigateByUrl('/user-profile');
  }

}
