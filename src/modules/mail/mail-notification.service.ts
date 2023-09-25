import { Injectable } from '@nestjs/common';

import { NotificationProvider } from '../notification/notification.provider';

@Injectable()
export class MailNotificationService implements NotificationProvider {
  sendNotification(info: any): void {
    console.log(`send mail via mail with data: ${info}`);
  }
}
