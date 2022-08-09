import { ApartmentUpdateManyWithoutRentersInput } from "./ApartmentUpdateManyWithoutRentersInput";

export type RenterUpdateInput = {
  apartmants?: ApartmentUpdateManyWithoutRentersInput;
  email?: string;
  nameSurname?: string;
  password?: string;
  phoneNumber?: string | null;
  username?: string;
};
