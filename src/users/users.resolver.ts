import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { Inject, UseGuards, OnModuleInit } from '@nestjs/common';
import { cqupt_user } from '../grpc/generated';
import { AuthGuard } from '../auth/auth.guard';

@Resolver('Users')
export class UsersResolver implements OnModuleInit {
  onModuleInit() {
    this.userService = this.grpcClientFactory.userModuleClient.getService('UserController');
  }

  constructor(
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  private userService: cqupt_user.UserController

  @Query('login')
  async login(@Args() args: { mobile: string, code: string }) {
    const { mobile, code } = args
    try {
      await this.userService.findOneUser({ type: 'mobile', data: { mobile } }).toPromise()
    } catch (error) {
      if (error.code === 404) {
        return await this.userService.creatUser({ type: 'mobile', data: { mobile } }).toPromise()
      }
    }
    return await this.userService.login({ type: 'mobile', data: { mobile } }).toPromise();
  }

  @Query('sendCode')
  // @UseGuards(AuthGuard)
  async sendCode(@Args() args: { mobile: string }) {
    return { code: 200, message: '验证码发送成功' }
  }
}
