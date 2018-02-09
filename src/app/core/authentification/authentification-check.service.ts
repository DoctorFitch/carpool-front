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
    if (this.firebaseAuth.auth.currentUser !== null) {
      return true;
    } else {
      return false;
    }
  }

  getAuth() {
    return this.firebaseAuth.auth;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('signup success!', value);
      })
      .catch(err => {
        console.log('err', err);
        console.log('Something went wrong:', err.message);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.notify.success(this.i18n.instant('LOGIN.SUCCESS.CONNECTED'));
      })
      .catch(err => {
        console.log('err', err);
        if (err.code === 'auth/invalid-email') {
          this.notify.error(this.i18n.instant('LOGIN.ERROR.INVALID_MAIL'));
        } else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
          this.notify.error(this.i18n.instant('LOGIN.ERROR.BAD_USER_PASSWORD'));
        }
      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    this.notify.warning(this.i18n.instant('LOGIN.SUCCESS.DISCONNECTED'));
  }

}
