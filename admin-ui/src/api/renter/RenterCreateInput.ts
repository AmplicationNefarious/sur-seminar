import { ApartmentCreateNestedManyWithoutRentersInput } from "./ApartmentCreateNestedManyWithoutRentersInput";

export type RenterCreateInput = {
  apartments?: ApartmentCreateNestedManyWithoutRentersInput;
  email: string;
  nameSurname: string;
  password: string;
  phoneNumber?: string | null;
  username: string;
};
