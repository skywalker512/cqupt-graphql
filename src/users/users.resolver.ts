import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { Inject, UseGuards } from '@nestjs/common';
import { cqupt_user } from '../grpc/generated';
import { AuthGuard } from '../auth/auth.guard';

@Resolver('Users')
export class UsersResolver {
  onModuleInit() {
    this.userService = this.grpcClientFactory.userModuleClient.getService('UserController');
  }

  constructor(
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  private userService: cqupt_user.UserController

  @Query('login')
  async login(@Args() args: { mobile: string, code: string }) {
    try {
      await this.userService.findOneUser({ mobile: args.mobile, type: 'mobile' }).toPromise()
    } catch (error) {
      if (error.code === 404) {
        return await this.userService.register({ mobile: args.mobile, password: args.mobile + 'key' }).toPromise()
      }
    }
    return await this.userService.login({ mobile: args.mobile, password: args.mobile + 'key' }).toPromise();
  }

  @Query('sendCode')
  // @UseGuards(AuthGuard)
  async sendCode(@Args() args: { mobile: string }) {
    return { code: 200, message: '验证码发送成功' }
  }
}
