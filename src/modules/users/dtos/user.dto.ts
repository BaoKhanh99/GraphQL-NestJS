import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ObjectType()
export class UserDto {
  @Field()
  @Type(() => Number)
  readonly id: number;

  @Field()
  @Type(() => String)
  readonly name: string;

  @Field()
  @Type(() => String)
  readonly userName: string;
}
