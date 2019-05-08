import { Module, NestModule, MiddlewareConsumer, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware, logger } from './common/middleware/logger.middleware';
import { CatsController } from './cats/cats.controller';
import { APP_PIPE } from '@nestjs/core';
// import { ValidationPipe } from './common/pipe/validation.pipe';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

// import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [CatsModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      // 判断传入是否正确
      useClass: ValidationPipe,
    },
  ],
})
// implements 实现父类，子类不可以覆盖父类的方法或者变量。即使子类定义与父类相同的
// 变量或者函数，也会被父类取代掉。
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(CatsController)
  }
}
