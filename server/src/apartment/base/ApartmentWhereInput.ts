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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OwnerWhereUniqueInput } from "../../owner/base/OwnerWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { ReservationListRelationFilter } from "../../reservation/base/ReservationListRelationFilter";
@InputType()
class ApartmentWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  address?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => OwnerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OwnerWhereUniqueInput)
  @IsOptional()
  @Field(() => OwnerWhereUniqueInput, {
    nullable: true,
  })
  idOwner?: OwnerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: FloatFilter,
  })
  @Type(() => FloatFilter)
  @IsOptional()
  @Field(() => FloatFilter, {
    nullable: true,
  })
  price?: FloatFilter;

  @ApiProperty({
    required: false,
    type: () => ReservationListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ReservationListRelationFilter)
  @IsOptional()
  @Field(() => ReservationListRelationFilter, {
    nullable: true,
  })
  reservations?: ReservationListRelationFilter;
}
export { ApartmentWhereInput };
