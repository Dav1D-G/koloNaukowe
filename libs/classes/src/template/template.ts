import { SchemaState , State } from '@notification-domain/entities';
import { RegistrationDto } from "@notification-domain/dto"
import { resolve } from 'path';
import { ClientKafka } from '@nestjs/microservices'


// export class KafkaSend {
//   constructor(
//     private readonly kafkaService : ClientKafka
//   )
    
//   async sendMessage(topic :string, file : string) : Promise<void>
//   {
//     return new Promise((resolve,reject)=>{

//     })
//   }
// }
