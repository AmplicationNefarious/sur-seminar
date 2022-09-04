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
import { CheckWhereUniqueInput } from "../../check/base/CheckWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ApartmentWhereUniqueInput } from "../../apartment/base/ApartmentWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
@InputType()
class ReservationWhereInput {
  @ApiProperty({
    required: false,
    type: () => CheckWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CheckWhereUniqueInput)
  @IsOptional()
  @Field(() => CheckWhereUniqueInput, {
    nullable: true,
  })
  check?: CheckWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  clientEmail?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  endReservation?: DateTimeNullableFilter;

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
    type: () => ApartmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ApartmentWhereUniqueInput)
  @IsOptional()
  @Field(() => ApartmentWhereUniqueInput, {
    nullable: true,
  })
  idApartment?: ApartmentWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  startReservation?: DateTimeFilter;
}
export { ReservationWhereInput };
