import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { NotifyService } from 'app/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from 'app/core/http.service';
import { Http, Response } from '@angular/http';
import { User } from 'app/core/models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthentificationCheckService extends HttpService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User>(null);
  currentUserObservable = this.currentUserSubject.asObservable();

  currentUser: User;

  constructor(public notify: NotifyService, public i18n: TranslateService, private http: Http) {
    super();
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  get isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn.next(true);
    }
    return this.loggedIn.asObservable(); // {2}
  }

  login(username: string, password: string): Observable<User> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + username, this.getOptions)
      .map((userResponse: Response) => {
        // login successful if there's a jwt token in the response
        if (userResponse) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(this.extractSingleData(userResponse, User)));
          this.currentUser = this.extractSingleData(userResponse, User);
          this.currentUserSubject.next(this.currentUser);
          this.loggedIn.next(true);
        }
        return this.extractSingleData(userResponse, User);
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.loggedIn.next(false);
  }

}
