import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  // 将 User 共享出去, 让其他使用 UsersModule 的 Module 都能使用 UsersService 
  exports: [UsersService],
})
export class UsersModule {}
