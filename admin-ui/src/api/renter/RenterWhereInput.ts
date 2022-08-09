import { ApartmentListRelationFilter } from "../apartment/ApartmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RenterWhereInput = {
  apartmants?: ApartmentListRelationFilter;
  email?: StringFilter;
  id?: StringFilter;
  nameSurname?: StringFilter;
  password?: StringFilter;
  phoneNumber?: StringNullableFilter;
  username?: StringFilter;
};
