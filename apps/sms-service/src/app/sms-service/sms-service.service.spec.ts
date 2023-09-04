import { Test, TestingModule } from '@nestjs/testing';
import { SmsServiceService } from './sms-service.service';

describe('SmsServiceService', () => {
  let service: SmsServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsServiceService],
    }).compile();

    service = module.get<SmsServiceService>(SmsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
