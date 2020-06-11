import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from './user-login';
import { SignUpService } from './signup.service';
import { Router } from '@angular/router';
import { UsernameExistsValidator } from './username-exists.validator.service';

@Component({
    templateUrl: './signup.component.html',
    providers: [UsernameExistsValidator]
})
export class SignUpComponent implements OnInit {
    signUpForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private signService: SignUpService,
                private route: Router,
                private usernameExistsValidator: UsernameExistsValidator) {
    }

    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            username: ['', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(40)
            ],
               // validador assíncrono
               this.usernameExistsValidator.checkUsernameExists()
            ],
            name: ['', [
                Validators.required,
                Validators.maxLength(50),
                Validators.minLength(10)
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(8),
                Validators.maxLength(20)
            ]]
        });
    }

    signup() {
        // pega todas as propriedades do formulário e com valores
        const newUser = this.signUpForm.getRawValue() as UserLogin;
        // grava novo usuário

        this.signService.signup(newUser)
                        .subscribe(() => this.route.navigate(['']),
                                   (erro) => console.log(erro));
    }
}
