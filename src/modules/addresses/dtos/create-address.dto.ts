import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateAddressDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  country: string;

  @Field()
  @IsString()
  @MaxLength(10, { message: 'Please enter' })
  @IsNotEmpty()
  province: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  district: string;
}
