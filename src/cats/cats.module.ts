import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { NotaddGrpcClientFactory } from '@/src/grpc/grpc.client-factory';

@Module({
  controllers: [CatsController],
  providers: [NotaddGrpcClientFactory, CatsService],
  exports: [CatsService],
})
export class CatsModule {}
