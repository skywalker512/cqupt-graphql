import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { Repository } from 'typeorm';
import { Department } from '../department/department.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepo: Repository<Card>,
  ) {}

  async creatCard(stuNum: string, name: string, department: Department, stuId?: number) {
    let input = stuId ? { stuId } : {}
    const card = await this.cardRepo.save(this.cardRepo.create({ ...input, stuNum, name, department }))
    return card
  }

  // async findOneCard(stuNum: string, name: string, stuId: number)
}
