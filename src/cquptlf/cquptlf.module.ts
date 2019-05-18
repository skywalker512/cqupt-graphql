import { Module } from '@nestjs/common';
import { CquptlfResolver } from './cquptlf.resolver';
import { CardResolver } from './card/card.resolver';
import { LocationResolver } from './location/location.resolver';

@Module({
  providers: [CquptlfResolver, CardResolver, LocationResolver]
})
export class CquptlfModule {}
