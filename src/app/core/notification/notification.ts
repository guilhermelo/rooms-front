import { NotificationType } from './notificationtype';

export class Notification {
    constructor(public readonly message: string,
                public readonly type: NotificationType) {
                }
}
