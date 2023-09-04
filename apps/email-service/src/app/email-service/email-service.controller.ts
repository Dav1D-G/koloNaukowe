import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import {RegistationTemplateQuery} from './../cqrs/query/RegistrationTemplateQuery'
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { SendgridService } from '@notification-domain/sendgrid';




@Controller('email-service')
export class EmailServiceController {

    constructor(
        private readonly queryBus : QueryBus,
        private readonly commandBus : CommandBus,
        private readonly sendgrid : SendgridService,
        ) {}

    @EventPattern('email.accounts.registration')
    async getTemplate(@Payload() data : string)
    {
    console.log(`Jestem email-service i odebrałem następujące dane : ${data}`);

    const template = await this.queryBus.execute(new RegistationTemplateQuery(data));

    const generatedTemplate = JSON.parse(JSON.parse(template));

    console.log('Odebrałem wygenerowaną templatke ......');

    // // SENDGRID ........

    const mail = {
        to: "dawid.glowacz@interia.pl",
        subject: 'SKNMM Registration Link',
        from: 'drakos234@interia.pl',
        text: 'Hello World from NestJS Sendgrid',
        html: generatedTemplate
    };

    this.sendgrid.send(mail);
   

    }




}
