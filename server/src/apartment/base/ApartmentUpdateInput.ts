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
  ValidateNested,
  IsNumber,
} from "class-validator";
<<<<<<< HEAD
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
=======
import { OwnerWhereUniqueInput } from "../../owner/base/OwnerWhereUniqueInput";
>>>>>>> main
import { Type } from "class-transformer";
import { ReservationUpdateManyWithoutApartmentsInput } from "./ReservationUpdateManyWithoutApartmentsInput";
@InputType()
class ApartmentUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string;

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
    required: false,
<<<<<<< HEAD
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  id_user?: UserWhereUniqueInput | null;
=======
    type: () => OwnerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OwnerWhereUniqueInput)
  @IsOptional()
  @Field(() => OwnerWhereUniqueInput, {
    nullable: true,
  })
  idOwner?: OwnerWhereUniqueInput | null;
>>>>>>> main

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number;

  @ApiProperty({
    required: false,
    type: () => ReservationUpdateManyWithoutApartmentsInput,
  })
  @ValidateNested()
  @Type(() => ReservationUpdateManyWithoutApartmentsInput)
  @IsOptional()
  @Field(() => ReservationUpdateManyWithoutApartmentsInput, {
    nullable: true,
  })
  reservations?: ReservationUpdateManyWithoutApartmentsInput;
}
export { ApartmentUpdateInput };
