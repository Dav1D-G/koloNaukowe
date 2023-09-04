import { Injectable } from '@nestjs/common';
import { initClient} from 'messagebird';
@Injectable()
export class MessagebirdService {
    
      async sendMessage(payload: { recipient: string; message: string }) {


        const bird = initClient('4p6qySUUOVe4pWZi23mOg8pNJ');

        const params = {
          originator: 'TestMessage',
          recipients: ['+48730102378'],
          body: payload.message,
        };
    
        bird.messages.create(params, function(err, response) {
          if (err) {
            console.log(`To jest nasz problem : ${err}`)
            return;
          }
    
          console.log(
            '🚀 ~ file: message-bird.service.ts ~ line 20 ~ MessageBirdService ~ this.messageBird.messages.create ~ response',
            response,
          );
        });
      }
}
