import { Injectable } from '@angular/core';
import { Room } from '../model/room';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoomService {

    uri = 'http://localhost:8080/rooms/v1/rooms/';

    constructor(private httpClient: HttpClient) {

    }

    save(room: Room): Observable<Room> {
        return this.httpClient.post<Room>(this.uri, room);
    }

    findRoom(roomId: string): Observable<Room> {
        const uri = this.uri + roomId;
        return this.httpClient.get<Room>(uri);
    }

}
