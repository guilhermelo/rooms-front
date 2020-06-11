import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from './initial/initial.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: InitialComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'signin',
        component: SignInComponent,
    },
    {
        path: 'signup',
        component: SignUpComponent
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
