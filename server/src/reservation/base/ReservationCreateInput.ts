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
import { ApartmentWhereUniqueInput } from "../../apartment/base/ApartmentWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { CheckWhereUniqueInput } from "../../check/base/CheckWhereUniqueInput";
@InputType()
class ReservationCreateInput {
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
  apartment?: ApartmentWhereUniqueInput | null;

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
  check?: CheckWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  clientEmail!: string;

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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  startReservation!: Date;
}
export { ReservationCreateInput };
