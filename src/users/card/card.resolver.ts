import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { cqupt_user } from '@/src/grpc/generated';
import { AuthGuard } from '@/src/auth/auth.guard';


@Resolver('Card')
export class CardResolver {
  constructor (
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  onModuleInit() {
    this.cardService = this.grpcClientFactory.userModuleClient.getService('CardController');
  }
  private cardService: cqupt_user.CardController

  @Mutation()
  @UseGuards(AuthGuard)
  async creatCard(@Args() agrs: cqupt_user.CreatCardReq ) {
    return await this.cardService.creatCard(agrs)
  }

  @Query()
  async findOneCard(@Args() args: cqupt_user.FindOneCardReq) {
    return await this.cardService.findOneCard(args)
  }
}