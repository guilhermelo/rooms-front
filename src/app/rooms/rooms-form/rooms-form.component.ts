import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/model/room';
import { RoomService } from '../rooms.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';

@Component({
    selector: 'room-form',
    templateUrl: './rooms-form.component.html'
})
export class RoomsFormComponent implements OnInit {
    
    roomForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private roomService: RoomService,
                private userService: UserService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.roomForm = this.formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.maxLength(20),
                Validators.minLength(10)
            ]],
            description: ['', [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(20)
            ]],
            amountPeople: ['', [
                Validators.required
            ]]
        });
    }


    save() {
        const room = this.roomForm.getRawValue() as Room;
        const user: User = this.userService.getLoggedUser();
        room.userId = user.id;

        this.roomService.save(room).subscribe((savedRoom) => {
            this.router.navigate(['']);
        });
    }

}
