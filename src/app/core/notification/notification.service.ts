import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NotificationType } from './notificationtype';
import { Notification } from './notification';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    notificationSubject = new Subject<Notification>();

    success(message: string) {
        this.addNotification(message, NotificationType.success);
    }

    error(message: string) {
        this.addNotification(message, NotificationType.danger);
    }

    warning(message: string) {
        this.addNotification(message, NotificationType.warning);
    }

    getNotifications(): Observable<Notification> {
        return this.notificationSubject.asObservable();
    }

    private addNotification(message: string, type: NotificationType) {
        this.notificationSubject.next(new Notification(message, type));
    }

}
