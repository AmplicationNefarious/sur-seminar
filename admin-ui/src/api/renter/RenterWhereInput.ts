import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RenterWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  nameSurname?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
