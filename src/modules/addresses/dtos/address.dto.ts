import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@ObjectType()
export class AddressDto {
  @Field()
  @Type(() => String)
  readonly country: string;

  @Field()
  @Type(() => String)
  readonly province: string;

  @Field()
  @Type(() => String)
  readonly district: string;
}
