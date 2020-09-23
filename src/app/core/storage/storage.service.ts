import { Injectable } from '@angular/core';
import { User } from '../user/user';

const KEY = 'authtoken';

@Injectable()
export class StorageService {

    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}
