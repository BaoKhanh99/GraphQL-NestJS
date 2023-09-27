import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class AuthLoginInput {
  @Field()
  @Type(() => String)
  readonly userName: string;

  @Field()
  @Type(() => String)
  readonly password: string;
}
