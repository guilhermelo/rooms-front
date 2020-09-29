import { Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsFormComponent } from './rooms-form/rooms-form.component';
import { RoomsDetailComponent } from './rooms-detail/rooms-detail.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { AppGuard } from '../core/auth/app.guard';

const routes: Routes = [
    {
        path: 'new',
        component: RoomsFormComponent,
        data: {
            title: 'New Room'
        },
        canActivate: [AppGuard]
    },
    {
        path: ':roomId',
        component: RoomsDetailComponent,
        data: {
            title: 'Room Details'
        },
        canActivate: [AppGuard]
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
