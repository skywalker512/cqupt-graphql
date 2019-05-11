import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { DepartmentResolver } from './department/department.resolver';
import { CardResolver } from './card/card.resolver';

@Module({
  providers: [UsersResolver, DepartmentResolver, CardResolver],
  // 将 User 共享出去, 让其他使用 UsersModule 的 Module 都能使用 UsersService 
})
export class UsersModule {}
