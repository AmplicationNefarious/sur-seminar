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
import { IsDate, IsOptional, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ApartmentWhereUniqueInput } from "../../apartment/base/ApartmentWhereUniqueInput";
@InputType()
class ReservationUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  daysOfReservation?: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  emailOfUser?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endReservation?: Date | null;

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
}
export { ReservationUpdateInput };