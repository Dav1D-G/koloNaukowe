import { Test, TestingModule } from '@nestjs/testing';
import { BucketStorageService } from './bucket-storage.service';

describe('BucketStorageService', () => {
  let service: BucketStorageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BucketStorageService],
    }).compile();

    service = module.get<BucketStorageService>(BucketStorageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
