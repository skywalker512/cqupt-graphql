import { Controller, Get, Post, Body, ForbiddenException, UseFilters, UseGuards, OnModuleInit, Inject } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { HttpExceptionFilter } from 'src/common/filter/http-exception.filter';
import { AuthGuard } from '@nestjs/passport';
import { GrpcClientFactory } from '@/src/grpc/grpc.client-factory';
import { cqupt_user } from '../grpc/generated';

@Controller('cats')
// @UseFilters(HttpExceptionFilter)
export class CatsController implements OnModuleInit {
  onModuleInit() {
    this.userService = this.grpcClientFactory.userModuleClient.getService('UserController');
  }
  constructor(
    private readonly catsService: CatsService,
    @Inject(GrpcClientFactory) private readonly grpcClientFactory: GrpcClientFactory
  ) {}
  private userService: cqupt_user.UserController
  @Post()
  async create(@Body() CreateCat: CreateCatDto) {
    await this.catsService.create(CreateCat)
  }
  @Get()
  // @UseFilters(new HttpExceptionFilter())
  // 让框架承担实例化责任并启用依赖注入。它可以减少内存使用量
  // @UseGuards(AuthGuard('jwt'))
  // @UseFilters(HttpExceptionFilter)
  // express 用到的
  // 自定义异常过滤器 可以有更多自定的内容
  async findAll() {
    // throw new ForbiddenException()
    const a = await this.userService.findAllUsers({})
    return a
  }
}
