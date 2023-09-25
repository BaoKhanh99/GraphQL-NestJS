import { Module } from '@nestjs/common';

import { NotificationProviderService } from './notification-provider.service';
import { NotificationEvent } from './notification.event';

@Module({
  providers: [NotificationEvent, NotificationProviderService],
  exports: [NotificationEvent, NotificationProviderService],
})
export class NotificationModule {}
