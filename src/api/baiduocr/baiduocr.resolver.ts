import { Resolver, Query, Args } from '@nestjs/graphql';
import { OnModuleInit, Inject } from '@nestjs/common';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { cqupt_api } from '@/src/grpc/generated';
@Resolver('Baiduocr')
export class BaiduocrResolver implements OnModuleInit {
  onModuleInit() {
    this.BaiduocrService = this.grpcClientFactory.apiModuleClient.getService('BaiduocrController');
  }

  constructor(
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  private BaiduocrService: cqupt_api.BaiduocrController

  @Query()
  async getAuthorization(@Args() agrs: cqupt_api.GetAuthorizationReq ) {
    return await this.BaiduocrService.getAuthorization(agrs).toPromise()
  }
}
