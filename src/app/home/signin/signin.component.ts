import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    loginForm: FormGroup;

    @ViewChild('usernameInput', { static: true }) usernameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
                private auth: AuthService,
                private router: Router,
                private userService: UserService,
                private platformDetectorService: PlatformDetectorService) {
    }
    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const username = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;

        this.auth.authenticate(username, password).subscribe(response => {

            if (response.headers.has('x-access-token')) {
                const authToken = response.headers.get('x-access-token');

                const tokenParts = authToken.split(' ');

                this.userService.setToken(tokenParts[1]);
                this.router.navigate(['']);
                return;
            }

            this.router.navigate(['home', 'signin']);
        }, (error) => {
            console.log(error);
            this.loginForm.reset();

            if (this.platformDetectorService.isPlatformBrowser()) {
                this.usernameInput.nativeElement.focus();
            }
        });
    }

    doSignup() {
        this.router.navigate(['signup']);
    }
}
