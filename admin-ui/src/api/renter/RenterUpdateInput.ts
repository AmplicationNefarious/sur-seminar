import { ApartmentUpdateManyWithoutRentersInput } from "./ApartmentUpdateManyWithoutRentersInput";

export type RenterUpdateInput = {
  apartments?: ApartmentUpdateManyWithoutRentersInput;
  email?: string;
  nameSurname?: string;
  password?: string;
  phoneNumber?: string | null;
  username?: string;
};
