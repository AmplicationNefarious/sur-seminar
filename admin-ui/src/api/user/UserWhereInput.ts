import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  nameSurname?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  username?: StringFilter;
};
