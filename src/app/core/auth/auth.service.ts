import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const uri = `${environment.apiUrl}/users/authentication`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string): Observable<HttpResponse<any>> {

    return this.http.post(uri, { username, password }, { observe: 'response' });
  }
}
