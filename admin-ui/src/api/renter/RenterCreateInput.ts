import { ApartmentCreateNestedManyWithoutRentersInput } from "./ApartmentCreateNestedManyWithoutRentersInput";

export type RenterCreateInput = {
  apartmants?: ApartmentCreateNestedManyWithoutRentersInput;
  email: string;
  nameSurname: string;
  password: string;
  phoneNumber?: string | null;
  username: string;
};
