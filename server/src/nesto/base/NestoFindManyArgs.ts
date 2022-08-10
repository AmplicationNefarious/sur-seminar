/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NestoWhereInput } from "./NestoWhereInput";
import { Type } from "class-transformer";
import { NestoOrderByInput } from "./NestoOrderByInput";

@ArgsType()
class NestoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NestoWhereInput,
  })
  @Field(() => NestoWhereInput, { nullable: true })
  @Type(() => NestoWhereInput)
  where?: NestoWhereInput;

  @ApiProperty({
    required: false,
    type: [NestoOrderByInput],
  })
  @Field(() => [NestoOrderByInput], { nullable: true })
  @Type(() => NestoOrderByInput)
  orderBy?: Array<NestoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NestoFindManyArgs };
