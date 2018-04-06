import { Component, OnInit } from '@angular/core';
import { AuthentificationCheckService } from 'app/core/services/authentification/authentification-check.service';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifyService } from 'app/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password = '';
  username = '';
  type;

  isUserConnected = false;

  constructor(
    public authService: AuthentificationCheckService,
    public router: Router,
    public route: ActivatedRoute,
    public notify: NotifyService,
    public i18n: TranslateService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = this.route.snapshot.params.type;
    });
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(user => {
      console.log('user', user);
      if (user) {
        switch (this.type) {
          case 'conductor':
            this.router.navigateByUrl('/home-conductor');
            break;
          case 'passenger':
            this.router.navigateByUrl('/home-passenger');
            break;
          default:
            break;
        }
      } else {
        this.notify.error(this.i18n.instant('LOGIN.ERROR.BAD_USER_PASSWORD'));
      }
    });

    this.resetFields(true);
  }

  resetFields(isConnected: boolean) {
    this.username = '';
    this.password = '';
    this.isUserConnected = isConnected;
  }
}
