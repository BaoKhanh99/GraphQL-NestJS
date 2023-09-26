import { Injectable } from '@nestjs/common';

import { NotificationProvider } from '../notification/notification.provider';

@Injectable()
export class SlackNotificationService implements NotificationProvider {
  sendNotification(info: any): void {
    console.log(`send mail via slack with data: ${info}`);
  }
}
