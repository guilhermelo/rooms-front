import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from 'src/app/model/room';
import { HttpClient } from '@angular/common/http';
import { Response } from 'src/app/model/response';

@Injectable({
    providedIn: 'root'
})
export class InicialService {

    constructor(private http: HttpClient) {
    }

    getRooms(): Observable<Response<Room>> {
        return this.http.get<Response<Room>>('http://localhost:8080/rooms/v1/rooms');
    }
}
