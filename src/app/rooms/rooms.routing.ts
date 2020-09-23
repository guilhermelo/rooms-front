import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsFormComponent } from './rooms-form/rooms-form.component';
import { RoomsDetailComponent } from './rooms-detail/rooms-detail.component';

const routes: Routes = [
    {
        path: 'new',
        component: RoomsFormComponent,
        data: {
            title: 'New Room'
        }
    },
    {
        path: ':roomId',
        component: RoomsDetailComponent,
        data: {
            title: 'Room Details'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class RoomsRouting {

}
