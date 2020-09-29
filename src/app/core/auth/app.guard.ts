import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppGuard implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        if (this.userService.isLogged()) {
            return true;
        }

        this.router.navigate(['home', 'signin'], { queryParams: { redirect: state.url } });
        return true;
    }

}
