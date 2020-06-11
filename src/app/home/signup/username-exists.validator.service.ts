import { Injectable } from "@angular/core";
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, map, first} from 'rxjs/operators';
import { UserLogin } from './user-login';

@Injectable()
export class UsernameExistsValidator {

    constructor(private signUpService: SignUpService) {

    }

    checkUsernameExists() {
        return (control: AbstractControl) => {
            return control.valueChanges.pipe(debounceTime(300))
                                       .pipe(switchMap(username => this.signUpService.checkUsernameExists(username)))
                                       .pipe(map((objeto: UserLogin) => {
                                           if (objeto.username) {
                                               return { usernameExists: true };
                                           }

                                           return null;
                                       }))
                                       .pipe(first());
        };
    }
}
