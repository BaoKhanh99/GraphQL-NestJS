import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

import { UpperCaseFirstMiddleware } from '@/common/field-middleware/app.field-middleware';

@InputType()
export class CreateUserDto {
  @Field({ middleware: [UpperCaseFirstMiddleware] })
  @IsString()
  @IsNotEmpty()
  userName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  password: string;
}
