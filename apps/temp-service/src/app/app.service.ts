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
<<<<<<< HEAD

    
=======
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
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
<<<<<<< HEAD

  putData(data : {file?:string,metadata : {templateId:string}})
  {
    this.kafkaService.subscribeToResponseOf(
      'notifications.api.v1'
    );

    return this.kafkaService.send('notifications.api.v1',data);
  }
=======
>>>>>>> 25c34785fc9ff510562e9bfa7225db98d199c57e
}
