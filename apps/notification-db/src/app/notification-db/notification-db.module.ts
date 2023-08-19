import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotificationEntity} from "../entities/notification-entity/notification-entity";
import {NotificationDbService} from "./notification-db.service";

@Module({
  imports: [TypeOrmModule.forFeature([NotificationEntity])],
  providers: [NotificationDbService],
})
export class NotificationDbModule {
}
