import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './department.entity';
import { DepartmentResolver } from './department.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  providers: [DepartmentService, DepartmentResolver]
})
export class DepartmentModule {}
