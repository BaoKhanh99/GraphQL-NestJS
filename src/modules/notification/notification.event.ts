import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import { NotificationProviderService } from './notification-provider.service';

import { EventConstant } from '@/common/constants/event.constant';

@Injectable()
export class NotificationEvent {
  constructor(
    private readonly notificationProviderService: NotificationProviderService,
  ) {}

  @OnEvent(EventConstant.notification)
  public async sendNotification({ provider, service, data }) {
    this.notificationProviderService.registerProvider(provider, service);

    this.notificationProviderService.sendNotification(provider, data);
  }
}
