import { Module } from '@nestjs/common';

import { NotificationManagerModule } from './notification-manager/notification-manager.module';


@Module({
  imports: [NotificationManagerModule],
})
export class AppModule {}
