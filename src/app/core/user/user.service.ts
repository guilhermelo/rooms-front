import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private storageService: StorageService) {
        if (this.storageService.hasToken()) {
            this.decodeAndNotify();
        }
    }

    setToken(token) {
        this.storageService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    getLoggedUser(): User {
        const token = this.storageService.getToken();
        const user: User = jwtDecode(token);
        return user;
    }

    private decodeAndNotify() {
        const user = this.getLoggedUser();
        this.userSubject.next(user);
    }

    logout() {
        this.storageService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.storageService.hasToken();
    }

    getUsername() {
        return this.userName;
    }
}
