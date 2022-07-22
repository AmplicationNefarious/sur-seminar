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
import { CheckWhereInput } from "./CheckWhereInput";
import { Type } from "class-transformer";
import { CheckOrderByInput } from "./CheckOrderByInput";

@ArgsType()
class CheckFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CheckWhereInput,
  })
  @Field(() => CheckWhereInput, { nullable: true })
  @Type(() => CheckWhereInput)
  where?: CheckWhereInput;

  @ApiProperty({
    required: false,
    type: [CheckOrderByInput],
  })
  @Field(() => [CheckOrderByInput], { nullable: true })
  @Type(() => CheckOrderByInput)
  orderBy?: Array<CheckOrderByInput>;

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

export { CheckFindManyArgs };
