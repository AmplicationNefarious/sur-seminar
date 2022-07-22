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
import { ApartmentWhereInput } from "./ApartmentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ApartmentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ApartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => ApartmentWhereInput)
  @IsOptional()
  @Field(() => ApartmentWhereInput, {
    nullable: true,
  })
  every?: ApartmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => ApartmentWhereInput)
  @IsOptional()
  @Field(() => ApartmentWhereInput, {
    nullable: true,
  })
  some?: ApartmentWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApartmentWhereInput,
  })
  @ValidateNested()
  @Type(() => ApartmentWhereInput)
  @IsOptional()
  @Field(() => ApartmentWhereInput, {
    nullable: true,
  })
  none?: ApartmentWhereInput;
}
export { ApartmentListRelationFilter };
