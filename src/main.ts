import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  // const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);
  // 将类型传递给 NestFactory.create() 方法时，如下例所示，app 对象将具有专用于该特定平台的方法。 但是，请注意，除非您确实要访问底层平台API，否则无需指定类型。
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
