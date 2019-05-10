import { Module, ValidationPipe, Global } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLConfigService } from './graphql-config.service';

@Global()
@Module({
  imports: [GraphQLModule.forRootAsync({
    useClass: GraphQLConfigService
  }), UsersModule, AuthModule],
  providers: [
    {
      provide: APP_PIPE,
      // 判断传入是否正确
      useClass: ValidationPipe,
    },
    GrpcClientFactory,
  ],
  exports: [GrpcClientFactory],
})
// implements 实现父类，子类不可以覆盖父类的方法或者变量。即使子类定义与父类相同的
// 变量或者函数，也会被父类取代掉。
export class AppModule {}
