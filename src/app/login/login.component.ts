import { Component, OnInit } from '@angular/core';
import { AuthentificationCheckService } from 'app/core/authentification/authentification-check.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from 'app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password = '';
  username = '';

  isUserConnected = false;

  constructor(
    public authService: AuthentificationCheckService,
    public router: Router,
    public notify: NotifyService
  ) { }

  signup() {
    console.log('password:', this.password);
    // this.authService.signup(this.emailFormControl.value, this.passwordFormControl.value);
    // this.emailFormControl.reset();
    // this.passwordFormControl.reset();
  }

  login() {
    console.log('password:', this.password);
    this.authService.login(this.username, this.password);
    this.username = '';
    this.password = '';
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.authService.user.subscribe(result => {
      console.log('result', result);
      if (result !== null) {
        this.isUserConnected = true;
        this.router.navigateByUrl('/home');
      }
      console.log('connected ? ', this.isUserConnected);
    });
  }

}
