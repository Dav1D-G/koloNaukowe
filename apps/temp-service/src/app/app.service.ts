import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('KAFKA_SERVICE')
    private readonly kafkaService: ClientKafka
  ) {}

  getData(data: { name: string; phone?: string; email?: string }) {
    //this.kafkaService.emit('send-message', data);
    this.kafkaService.subscribeToResponseOf(
      'notifications.accounts.registration'
    );
    return this.kafkaService.send<{
      name: string;
      phone?: string;
      email?: string;
    }>('notifications.accounts.registration', data);
  }


  getUsers()
  {
    this.kafkaService.subscribeToResponseOf(
      'notifications.accounts.getusers'
    );

    return this.kafkaService.send('notifications.accounts.getusers',{});
  }
}
