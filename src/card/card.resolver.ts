import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CardService } from './card.service';
import { Department } from '../department/department.entity';

@Resolver('Card')
export class CardResolver {
  constructor (
    @Inject(CardService) private readonly cardService: CardService
  ) {}

  // @Mutation()
  // async creatCard(@Args() agrs: {stuNum: string, name: string, department: Department, stuId?: number}) {
  //   const { stuNum, name, department, stuId } = agrs
  //   const result = await this.cardService.creatCard(stuNum, name, department, stuId)
  //   return { code: 200, massage: '卡片创建成功', result }
  // }
}
