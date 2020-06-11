import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/rooms/users/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(username: string, password: string): Observable<HttpResponse<any>> {

    return this.http.post(API_URL, { username, password }, { observe: 'response' });
  }
}
