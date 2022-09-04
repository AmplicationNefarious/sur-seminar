import { ApartmentCreateNestedManyWithoutRentersInput } from "./ApartmentCreateNestedManyWithoutRentersInput";

export type RenterCreateInput = {
  apartments?: ApartmentCreateNestedManyWithoutRentersInput;
  email: string;
  nameSurname: string;
  phoneNumber?: string | null;
};
