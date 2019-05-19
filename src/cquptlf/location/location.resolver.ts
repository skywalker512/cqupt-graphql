import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { OnModuleInit, Inject, UseGuards } from '@nestjs/common';
import { cqupt_lf_be } from '@/src/grpc/generated';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { SuperAuthGuard } from '@/src/auth/auth.guard';

@Resolver('Location')
export class LocationResolver implements OnModuleInit {
  onModuleInit() {
    this.locationService = this.grpcClientFactory.cquptModuleClient.getService('LocationController');
  }

  constructor(
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  private locationService: cqupt_lf_be.LocationController
  
  @Query()
  async findAllLocationWithTags(@Args() agrs: cqupt_lf_be.FindAllLocationWithTagsReq ) {
    return await this.locationService.findAllLocationWithTags(agrs)
  }

  @Mutation()
  @UseGuards(SuperAuthGuard)
  async creatLocation(@Args() agrs: cqupt_lf_be.CreatLocationReq ) {
    return await this.locationService.creatLocation(agrs)
  }

  @Mutation()
  @UseGuards(SuperAuthGuard)
  async creatLocationTag(@Args() args: cqupt_lf_be.CreatLocationTagReq ) {
    return await this.locationService.creatLocationTag(args)
  }
}
