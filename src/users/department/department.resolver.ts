import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject, OnModuleInit } from '@nestjs/common';
import { cqupt_user } from '../../grpc/generated';
import { GrpcClientFactory } from '../../grpc/grpc.client-factory';

@Resolver('Department')
export class DepartmentResolver implements OnModuleInit {
  constructor (
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  onModuleInit() {
    this.departmentService = this.grpcClientFactory.userModuleClient.getService('DepartmentController');
  }
  private departmentService: cqupt_user.DepartmentController

  @Mutation()
  async creatDepartment(@Args() agrs: cqupt_user.CreatDepartmentReq) {
    return await this.departmentService.creatDepartment(agrs)
  }

  @Query()
  async findAllDepartments() {
    return  await this.departmentService.findAllDepartments({})
  }
}
