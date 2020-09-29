import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
    loginForm: FormGroup;

    @ViewChild('usernameInput', { static: true }) usernameInput: ElementRef<HTMLInputElement>;

    constructor(private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private auth: AuthService,
                private router: Router,
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
            const redirectRoute: string = this.route.snapshot.queryParams['redirect'] || '/';
            this.router.navigateByUrl(redirectRoute);
        }, (error) => {
            console.log(error);
            this.loginForm.reset();

            if (this.platformDetectorService.isPlatformBrowser()) {
                this.usernameInput.nativeElement.focus();
            }
        });
    }
}
