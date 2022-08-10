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
import { NestoWhereInput } from "./NestoWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NestoListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NestoWhereInput,
  })
  @ValidateNested()
  @Type(() => NestoWhereInput)
  @IsOptional()
  @Field(() => NestoWhereInput, {
    nullable: true,
  })
  every?: NestoWhereInput;

  @ApiProperty({
    required: false,
    type: () => NestoWhereInput,
  })
  @ValidateNested()
  @Type(() => NestoWhereInput)
  @IsOptional()
  @Field(() => NestoWhereInput, {
    nullable: true,
  })
  some?: NestoWhereInput;

  @ApiProperty({
    required: false,
    type: () => NestoWhereInput,
  })
  @ValidateNested()
  @Type(() => NestoWhereInput)
  @IsOptional()
  @Field(() => NestoWhereInput, {
    nullable: true,
  })
  none?: NestoWhereInput;
}
export { NestoListRelationFilter };