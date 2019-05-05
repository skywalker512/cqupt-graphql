import { IsString, IsInt } from "class-validator";

// 这里为什么使用类 因为要使用 api 接口的检查
export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}