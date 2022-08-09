import { ApartmentListRelationFilter } from "../apartment/ApartmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  apartments?: ApartmentListRelationFilter;
  email?: StringFilter;
  id?: StringFilter;
  nameSurname?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  username?: StringFilter;
};
