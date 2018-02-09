import { Component, OnInit } from '@angular/core';
import { AuthentificationCheckService } from 'app/core/authentification/authentification-check.service';
import { Router } from '@angular/router';

// jquery
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor(
    public _authService: AuthentificationCheckService,
    public _router: Router
  ) { }

  ngOnInit() {
    // * get email of currently connected user
    this._authService.getAuth().onAuthStateChanged(user => this.username = user.email);
  }

  activeDropdown() {
    $('.dropdown-button').dropdown();
  }

  logout() {
    this._authService.logout();
    this._router.navigateByUrl('/login');
  }

}
