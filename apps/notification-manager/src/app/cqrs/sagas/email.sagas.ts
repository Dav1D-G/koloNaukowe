import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RegisterEmailEvent } from '../events/impl/RegisterEmail.event';
import {RegistrationSmsCommand} from './../commands/RegistrationSmsCommand'



@Injectable()
export class SendDataSagas {
  

  @Saga()
  emailSend = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(RegisterEmailEvent),
      map((event) => {
        console.log(`Wysłano dane do email-service : ${event}`);
        return new RegistrationSmsCommand('sms.accounts.registration', event.traceId);
      })
    );
  };
}
