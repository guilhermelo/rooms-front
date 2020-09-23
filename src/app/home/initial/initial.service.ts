import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/model/room';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/model/response';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class InicialService {

    constructor(private http: HttpClient) {
    }

    getRooms(): Observable<Response<Room>> {

        const uri = `${environment.apiUrl}/v1/rooms`;

        return this.http.get<Response<Room>>(uri);
    }
}
