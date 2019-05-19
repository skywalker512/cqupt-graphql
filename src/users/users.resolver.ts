import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { Inject, OnModuleInit } from '@nestjs/common';
import { cqupt_user, cqupt_api } from '../grpc/generated';

@Resolver('Users')
export class UsersResolver implements OnModuleInit {
  onModuleInit() {
    this.userService = this.grpcClientFactory.userModuleClient.getService('UserController');
    this.qcloudsmsService = this.grpcClientFactory.apiModuleClient.getService('QcloudsmsController');
  }

  constructor(
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  private userService: cqupt_user.UserController
  private qcloudsmsService: cqupt_api.QcloudsmsController

  @Query()
  async login(@Args() args: { mobile: string, code: string }): Promise<cqupt_user.LoginRes> {
    const { mobile } = args
    await this.qcloudsmsService.validateCode(args).toPromise()
    return await this.userService.login({ data: { mobile } }).toPromise()
  }

  @Query()
  async superAdminLogin(@Args() args: { mobile: string, code: string }): Promise<cqupt_user.LoginRes> {
    const { mobile } = args
    await this.qcloudsmsService.validateCode(args).toPromise()
    return await this.userService.superAdminLogin({ data: { mobile } }).toPromise()
  }

  @Query()
  async sendCode(@Args() args: { mobile: string }) {
    return { code: 200, message: '验证码发送成功' }
  }
}
