import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

import { CreateAddressDto } from '@/modules/addresses/dtos/create-address.dto';

@InputType()
export class CreateUserDto {
  @Field()
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

  @Field(() => [CreateAddressDto])
  @Type(() => CreateAddressDto)
  @ValidateNested()
  address: CreateAddressDto[];
}
