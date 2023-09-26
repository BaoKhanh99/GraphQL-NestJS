export enum PROVIDERS {
  MAIL = 'mail',
  SLACK = 'slack',
}

export abstract class NotificationProvider {
  abstract sendNotification(info: any): void;
}
