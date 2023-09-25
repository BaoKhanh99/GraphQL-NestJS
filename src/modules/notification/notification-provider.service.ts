import { Injectable } from '@nestjs/common';

import { NotificationProvider, PROVIDERS } from './notification.provider';

@Injectable()
export class NotificationProviderService {
  private notificationProviders: Record<string, NotificationProvider> = {};

  public registerProvider(provider: PROVIDERS, service: NotificationProvider) {
    this.notificationProviders[provider] = service;
  }

  public async sendNotification(provider: PROVIDERS, info: any) {
    const service = this.notificationProviders[provider];

    if (service) {
      service.sendNotification(info);
    } else {
      throw new Error('Unsupported service!');
    }
  }
}
