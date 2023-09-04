import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

import {UpdateStateCommand} from './../account/command/UpdateStateCommand'
import { CommandBus } from '@nestjs/cqrs';

import { State } from '@notification-domain/entities';
import { MessagebirdService } from '@notification-domain/messagebird';

@Controller('sms-service')
export class SmsServiceController {

    constructor(
        private readonly commandBus : CommandBus,
        private readonly messageBird : MessagebirdService,
    ){}

    @EventPattern('sms.accounts.registration')
    async getData(@Payload() data : string)
    {
        console.log(`Jestem sms-service i odebrałem : ${data}`);

        await this.commandBus.execute(new UpdateStateCommand(State.SENDING_SMS ,data));

        // LOGIC SENDING SMS
        await this.messageBird.sendMessage({
            recipient : '+48730102378',
            message : 'Witaj ! Udało nam się <3'
        });

        await this.commandBus.execute(new UpdateStateCommand(State.SMS_SENT ,data));

    }
}
