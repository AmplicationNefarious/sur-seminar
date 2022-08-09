import { ApartmentCreateNestedManyWithoutUsersInput } from "./ApartmentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  apartments?: ApartmentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  nameSurname?: string | null;
  password: string;
  phoneNumber?: string | null;
  roles: Array<string>;
  username: string;
};
