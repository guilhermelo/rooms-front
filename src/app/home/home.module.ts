import { NgModule } from '@angular/core';
import { SignInComponent } from './signin/signin.component';

import { ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageValidatorModule } from '../components/message-validator/message-validator.module';
import { InitialComponent } from './initial/initial.component';
import { CardModule } from '../components/card/card.module';
import { SignUpComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeRouting } from './home.routing';
import { SignUpService } from './signup/signup.service';

@NgModule({
    declarations: [SignInComponent, SignUpComponent, InitialComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MessageValidatorModule,
        RouterModule,
        CardModule,
        HomeRouting
    ],
    providers: [SignUpService]
})
export class HomeModule {
}
