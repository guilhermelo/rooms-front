import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService: StorageService,
                private userService: UserService,
                private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.tokenService.hasToken()) {
            const token = this.tokenService.getToken();

            request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(request).pipe(tap(httpEvent => {
            if (httpEvent instanceof HttpResponse) {
                if (httpEvent.status === 403) {
                    this.userService.logout();
                    this.router.navigate(['']);
                }
            }
        }));
    }
}
