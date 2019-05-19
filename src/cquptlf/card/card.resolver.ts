import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OnModuleInit, Inject, UseGuards } from '@nestjs/common';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { cqupt_lf_be } from '@/src/grpc/generated';
import { AuthGuard } from '@/src/auth/auth.guard';

@Resolver('Card')
export class CardResolver implements OnModuleInit {
  onModuleInit() {
    this.cardService = this.grpcClientFactory.cquptModuleClient.getService('CardController');
  }

  constructor(
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  private cardService: cqupt_lf_be.CardController
  
  @Query()
  async findCardStatus(@Args() agrs: cqupt_lf_be.FindCardStatusReq ) {
    return await this.cardService.findCardStatus(agrs)
  }

  @Mutation()
  @UseGuards(AuthGuard)
  async changeCardStatus(@Args() agrs: cqupt_lf_be.ChangeCardStatusReq ) {
    return await this.cardService.changeCardStatus(agrs)
  }
}
