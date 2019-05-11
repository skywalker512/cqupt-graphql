import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { cqupt_user } from '@/src/grpc/generated';

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
  async creatCard(@Args() agrs: cqupt_user.CreatCardReq ) {
    return await this.cardService.creatCard(agrs)
  }
}