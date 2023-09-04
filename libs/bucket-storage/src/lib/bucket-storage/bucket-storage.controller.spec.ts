import { Test, TestingModule } from '@nestjs/testing';
import { BucketStorageController } from './bucket-storage.controller';

describe('BucketStorageController', () => {
  let controller: BucketStorageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BucketStorageController],
    }).compile();

    controller = module.get<BucketStorageController>(BucketStorageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
