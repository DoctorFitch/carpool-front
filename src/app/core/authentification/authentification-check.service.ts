import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { NotifyService } from 'app/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class AuthentificationCheckService {

  user: Observable<firebase.User>;

  constructor(
    private firebaseAuth: AngularFireAuth,
    public notify: NotifyService,
    public i18n: TranslateService
  ) {
    this.user = firebaseAuth.authState;
  }

  isAuthenticated() {
    // if (this.firebaseAuth.auth.currentUser !== null) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  getAuth() {
  }

  signup(email: string, password: string) {
  }

  login(email: string, password: string) {
  }

  logout() {
  }

}
