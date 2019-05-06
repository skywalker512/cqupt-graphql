import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  async findOneByEmail(email: string): Promise<User>  {
    return { email }
  }
}
