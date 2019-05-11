import { Test, TestingModule } from '@nestjs/testing';
import { CquptlfResolver } from './cquptlf.resolver';

describe('CquptlfResolver', () => {
  let resolver: CquptlfResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CquptlfResolver],
    }).compile();

    resolver = module.get<CquptlfResolver>(CquptlfResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
