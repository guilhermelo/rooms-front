import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { AppGuard } from '../core/auth/app.guard';


const routes: Routes = [
    {
        path: '',
        component: InitialComponent,
        canActivate: [AppGuard],
        data: {
            title: 'Rooms'
        }
    },
    {
        path: 'signin',
        component: SignInComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Sign in'
        }
    },
    {
        path: 'signup',
        component: SignUpComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'Sign up'
        }
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRouting {

}
