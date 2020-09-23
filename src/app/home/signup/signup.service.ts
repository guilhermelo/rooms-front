import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from './user-login';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SignUpService {

    urlService = `${environment.apiUrl}/users`;

    constructor(private http: HttpClient) {
    }

    checkUsernameExists(username: string) {
        return this.http.get(`${this.urlService}/exists/` + username);
    }

    signup(userLogin: UserLogin) {
        return this.http.post(this.urlService, userLogin);
    }
}
