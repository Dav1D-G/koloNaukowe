import { Test, TestingModule } from '@nestjs/testing';
import { EmailServiceController } from './email-service.controller';

describe('EmailServiceController', () => {
  let controller: EmailServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailServiceController],
    }).compile();

    controller = module.get<EmailServiceController>(EmailServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
