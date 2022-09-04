import { ApartmentUpdateManyWithoutRentersInput } from "./ApartmentUpdateManyWithoutRentersInput";

export type RenterUpdateInput = {
  apartments?: ApartmentUpdateManyWithoutRentersInput;
  email?: string;
  nameSurname?: string;
  phoneNumber?: string | null;
};
