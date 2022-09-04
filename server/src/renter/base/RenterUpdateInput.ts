/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApartmentUpdateManyWithoutRentersInput } from "./ApartmentUpdateManyWithoutRentersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class RenterUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ApartmentUpdateManyWithoutRentersInput,
  })
  @ValidateNested()
  @Type(() => ApartmentUpdateManyWithoutRentersInput)
  @IsOptional()
  @Field(() => ApartmentUpdateManyWithoutRentersInput, {
    nullable: true,
  })
  apartments?: ApartmentUpdateManyWithoutRentersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nameSurname?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;
}
export { RenterUpdateInput };
