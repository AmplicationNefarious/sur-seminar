import { ApartmentListRelationFilter } from "../apartment/ApartmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RenterWhereInput = {
  apartments?: ApartmentListRelationFilter;
  email?: StringFilter;
  id?: StringFilter;
  nameSurname?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
