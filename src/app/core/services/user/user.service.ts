import { Injectable } from '@angular/core';
import { User } from 'app/core/models/user.model';
import { HttpService } from '../../http.service';
import { Response, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable()
export class UserService extends HttpService {

    apiurl = environment.fakeApi;

    constructor(private http: Http) {
        super();
    }

    getAll(): Observable<User[]> {
        return this.http.get(this.apiurl + '/users', this.getOptions)
            .map((response: Response) => this.extractArrayData(response, User))
            .catch(this.handleError);
    }

    getById(id: number): Observable<User> {
        return this.http.get(this.apiurl + '/users/' + id, this.getOptions)
            .map((response: Response) => this.extractSingleData(response, User))
            .catch(this.handleError);
    }

    create(user: User): Observable<User> {
        const body = JSON.stringify(user);
        return this.http.post(this.apiurl + '/users', user, this.postOptions)
            .map((response: Response) => this.extractSingleData(response, User))
            .catch(this.handleError);
    }

    update(user: User): Observable<User> {
        const body = JSON.stringify(user);
        return this.http.put(this.apiurl + '/users/' + user.id, body, this.postOptions)
            .map((response: Response) => this.extractSingleData(response, User))
            .catch(this.handleError);
    }

    delete(id: number) {
        return this.http.delete(this.apiurl + '/users/' + id, this.getOptions)
            .map((response: Response) => { })
            .catch(this.handleError);
    }
}