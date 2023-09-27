import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UpperCaseFirstMiddleware } from '@/common/field-middleware/app.field-middleware';

@ObjectType()
export class UserDto {
  @Field()
  @Type(() => Number)
  readonly id: number;

  @Field({ middleware: [UpperCaseFirstMiddleware] })
  @Type(() => String)
  readonly name: string;

  @Field()
  @Type(() => String)
  readonly userName: string;
}
