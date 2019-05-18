import { Resolver, Query, Args } from '@nestjs/graphql';
import { OnModuleInit, Inject } from '@nestjs/common';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { cqupt_api } from '@/src/grpc/generated';

@Resolver('Qcloudsms')
export class QcloudsmsResolver implements OnModuleInit {
  onModuleInit() {
    this.qcloudsmsService = this.grpcClientFactory.apiModuleClient.getService('QcloudsmsController');
  }
  constructor(
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  private qcloudsmsService: cqupt_api.QcloudsmsController

  @Query()
  async sendVerifyCode(@Args() agrs: cqupt_api.SendVerifyCodeReq ) {
    return await this.qcloudsmsService.sendVerifyCode(agrs).toPromise()
  }
}
