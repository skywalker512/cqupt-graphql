import { Test, TestingModule } from '@nestjs/testing';
import { QcloudsmsResolver } from './qcloudsms.resolver';

describe('QcloudsmsResolver', () => {
  let resolver: QcloudsmsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QcloudsmsResolver],
    }).compile();

    resolver = module.get<QcloudsmsResolver>(QcloudsmsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
