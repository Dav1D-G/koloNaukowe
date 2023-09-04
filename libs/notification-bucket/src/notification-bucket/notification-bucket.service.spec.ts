import { Test, TestingModule } from '@nestjs/testing';
import { NotificationBucketService } from './notification-bucket.service';

describe('NotificationBucketService', () => {
  let service: NotificationBucketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationBucketService],
    }).compile();

    service = module.get<NotificationBucketService>(NotificationBucketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
