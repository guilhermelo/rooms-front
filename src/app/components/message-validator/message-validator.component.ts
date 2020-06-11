import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './message-validator.component.html',
    selector: 'message-validator'
})
export class MessageValidatorComponent {

    @Input()
    message: string;
}
