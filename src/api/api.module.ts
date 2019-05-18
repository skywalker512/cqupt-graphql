import { Module } from '@nestjs/common';
import { BaiduocrResolver } from './baiduocr/baiduocr.resolver';

@Module({
  providers: [BaiduocrResolver]
})
export class ApiModule {}
