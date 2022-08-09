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
import { ApartmentCreateNestedManyWithoutUsersInput } from "./ApartmentCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => ApartmentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ApartmentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ApartmentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  apartments?: ApartmentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
<<<<<<< HEAD
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;
=======
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;
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
  nameSurname?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
