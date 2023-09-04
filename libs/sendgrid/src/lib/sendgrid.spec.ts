import { sendgrid } from './sendgrid';

describe('sendgrid', () => {
  it('should work', () => {
    expect(sendgrid()).toEqual('sendgrid');
  });
});
