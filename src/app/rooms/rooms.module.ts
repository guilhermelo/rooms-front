import { NgModule } from '@angular/core';
import { RoomsFormComponent } from './rooms-form/rooms-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageValidatorModule } from '../components/message-validator/message-validator.module';
import { RoomsRouting } from './rooms.routing';
import { HttpClientModule } from '@angular/common/http';
import { RoomsDetailComponent } from './rooms-detail/rooms-detail.component';

@NgModule({
    declarations: [
        RoomsFormComponent,
        RoomsDetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        MessageValidatorModule,
        RoomsRouting
    ]
})
export class RoomsModule {

}
