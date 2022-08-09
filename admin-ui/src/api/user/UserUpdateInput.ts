import { ApartmentUpdateManyWithoutUsersInput } from "./ApartmentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  apartments?: ApartmentUpdateManyWithoutUsersInput;
  email?: string;
  nameSurname?: string | null;
  password?: string;
  phoneNumber?: string | null;
  roles?: Array<string>;
  username?: string;
};
