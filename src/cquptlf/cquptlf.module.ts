import { Module } from '@nestjs/common';
import { CquptlfResolver } from './cquptlf.resolver';
import { CardResolver } from './card/card.resolver';

@Module({
  providers: [CquptlfResolver, CardResolver]
})
export class CquptlfModule {}
