import { ApartmentListRelationFilter } from "../apartment/ApartmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  apartments?: ApartmentListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nameSurname?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  username?: StringFilter;
};
