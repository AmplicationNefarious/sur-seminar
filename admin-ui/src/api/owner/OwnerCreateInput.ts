import { ApartmentCreateNestedManyWithoutOwnersInput } from "./ApartmentCreateNestedManyWithoutOwnersInput";

export type OwnerCreateInput = {
  apartments?: ApartmentCreateNestedManyWithoutOwnersInput;
  email: string;
  nameSurname?: string | null;
  password: string;
  phoneNumber?: string | null;
};
