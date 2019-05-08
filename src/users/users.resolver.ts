import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { Inject } from '@nestjs/common';
import { cqupt_user } from '../grpc/generated';

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
  async login(@Args() args: { mobile: string, password: string }) {
    return await this.userService.login(args).toPromise();
  }

  @Mutation('register')
  async register(@Args() args: { mobile: string, password: string }) {
    return await this.userService.register(args).toPromise();
  }
}
