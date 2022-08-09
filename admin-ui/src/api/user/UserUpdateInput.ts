import { ApartmentUpdateManyWithoutUsersInput } from "./ApartmentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  apartments?: ApartmentUpdateManyWithoutUsersInput;
  email?: string | null;
  nameSurname?: string | null;
  password?: string;
  phoneNumber?: string | null;
  roles?: Array<string>;
  username?: string;
};
