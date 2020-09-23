import { Component, OnInit } from '@angular/core';
import { RoomService } from '../rooms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Room } from 'src/app/model/room';

@Component({
    templateUrl: './rooms-detail.component.html'
})
export class RoomsDetailComponent implements OnInit {

    room: Room = new Room();

    constructor(private roomService: RoomService,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const roomId = this.route.snapshot.params.roomId;
        this.roomService.findRoom(roomId).subscribe(room => {
            console.log(room);
            
            this.room = room;
        });
    }
}
