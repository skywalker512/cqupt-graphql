import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Resolver('Department')
export class DepartmentResolver {
  constructor (
    @Inject(DepartmentService) private readonly departmentService: DepartmentService
  ) {}
  @Mutation()
  async creatDepartment(@Args() agrs: { name: string }) {
    await this.departmentService.creatDepartment(agrs.name)
    return { code: 200, message: '学院创建成功' }
  }

  @Query()
  async findAllDepartments() {
    const result = await this.departmentService.findAllDepartments()
    return { code: 200, message: '查询所有学院成功', result }
  }
}
