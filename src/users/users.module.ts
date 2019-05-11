import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersResolver],
  // 将 User 共享出去, 让其他使用 UsersModule 的 Module 都能使用 UsersService 
})
export class UsersModule {}
