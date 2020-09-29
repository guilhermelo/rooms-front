import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const uri = `${environment.apiUrl}/users/authentication`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  authenticate(username: string, password: string): Observable<HttpResponse<any>> {

    return this.http.post(uri, { username, password }, { observe: 'response' })
                    .pipe(tap((response: HttpResponse<any>) => {
      if (response.headers.has('x-access-token')) {
        const authToken = response.headers.get('x-access-token');

        const tokenParts = authToken.split(' ');
        this.userService.setToken(tokenParts[1]);
      }
    }));
  }
}
