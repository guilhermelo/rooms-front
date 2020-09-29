import { Component, Input } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification } from './notification';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html'
})
export class NotificationComponent {

    notifications: Notification[] = [];

    constructor(private notificationService: NotificationService) {

        this.notificationService.getNotifications().subscribe(notification => {

            if (!notification) {
                this.notifications = [];
                return;
            }

            this.notifications.push(notification);

            setTimeout(() => {
                this.notifications = this.notifications.filter(n => n !== notification);
            }, 5000);
        });
    }
}
