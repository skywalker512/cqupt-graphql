import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const { metatype } = metadata
    if(!metadata || !this.toValidate(metatype)) {
      return value
    }
    const object = plainToClass(metatype, value)
    
    const errors = await validate(object)
    // object 转换出来的 class
    // metatype class 的名字
    // value 传来的 json 
    // errors 错误 数组
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed')
    }
    return value
  }

  /**
   * 排除原生 JS 类型, 提高性能
   * @param metatype 
   */
  private toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object]
    return !types.find((type) => metatype === type)
  }
}
