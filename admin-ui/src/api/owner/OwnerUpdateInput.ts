import { ApartmentUpdateManyWithoutOwnersInput } from "./ApartmentUpdateManyWithoutOwnersInput";

export type OwnerUpdateInput = {
  apartments?: ApartmentUpdateManyWithoutOwnersInput;
  email?: string;
  nameSurname?: string | null;
  password?: string;
  phoneNumber?: string | null;
};
