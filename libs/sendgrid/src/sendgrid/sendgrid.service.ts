import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Sendgrid from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  constructor(private readonly configService: ConfigService) {
        // Don't forget this one.
        // The apiKey is required to authenticate our
        // request to SendGrid API.
        const apiKey = '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';
        Sendgrid.setApiKey(apiKey);
        

        
    }

  async send(mail: Sendgrid.MailDataRequired) {


    try {
        

        const transport = await Sendgrid.send(mail);
        // avoid this on production. use log instead :)
        console.log(`E-Mail sent to ${mail.to}`);
        return transport;
    }
    catch(err) {
        console.log(`Wystąpił następujący błąd : ${err}`)
    }

    
  }
}
