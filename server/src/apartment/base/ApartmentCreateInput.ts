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
import {
  IsString,
  IsOptional,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { RenterWhereUniqueInput } from "../../renter/base/RenterWhereUniqueInput";
import { Type } from "class-transformer";
import { ReservationCreateNestedManyWithoutApartmentsInput } from "./ReservationCreateNestedManyWithoutApartmentsInput";
@InputType()
class ApartmentCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  address!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
    type: () => RenterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RenterWhereUniqueInput)
  @IsOptional()
  @Field(() => RenterWhereUniqueInput, {
    nullable: true,
  })
  renter?: RenterWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ReservationCreateNestedManyWithoutApartmentsInput,
  })
  @ValidateNested()
  @Type(() => ReservationCreateNestedManyWithoutApartmentsInput)
  @IsOptional()
  @Field(() => ReservationCreateNestedManyWithoutApartmentsInput, {
    nullable: true,
  })
  reservations?: ReservationCreateNestedManyWithoutApartmentsInput;
}
export { ApartmentCreateInput };
