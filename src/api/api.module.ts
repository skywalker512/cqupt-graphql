import { Module } from '@nestjs/common';
import { BaiduocrResolver } from './baiduocr/baiduocr.resolver';
import { QcloudsmsResolver } from './qcloudsms/qcloudsms.resolver';

@Module({
  providers: [BaiduocrResolver, QcloudsmsResolver]
})
export class ApiModule {}
