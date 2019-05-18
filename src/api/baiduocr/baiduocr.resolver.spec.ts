import { Test, TestingModule } from '@nestjs/testing';
import { BaiduocrResolver } from './baiduocr.resolver';

describe('BaiduocrResolver', () => {
  let resolver: BaiduocrResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaiduocrResolver],
    }).compile();

    resolver = module.get<BaiduocrResolver>(BaiduocrResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
