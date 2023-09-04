import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  NotificationEntity,
  State,
} from '../entities/notification-entity/notification-entity';
import { Repository } from 'typeorm';
import { RegistrationDto } from '../../../../../libs/dto/src/dtos/registration.dto/registration.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NotificationDbService {
  constructor(
    @InjectRepository(NotificationEntity)
    private repository: Repository<NotificationEntity>
  ) {}

  async register(registrationDto: RegistrationDto) {
    const newNotification = {
      traceId: uuidv4(),
      data: registrationDto,
      state: State.NEW,
    };
    const status = this.repository.create(newNotification);
    console.log(`Udało się stworzyć następujące dane : ${registrationDto}`);
    return this.repository.save(status);
  }
}
