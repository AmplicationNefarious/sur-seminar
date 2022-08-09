import { ApartmentListRelationFilter } from "../apartment/ApartmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type OwnerWhereInput = {
  apartments?: ApartmentListRelationFilter;
  email?: StringFilter;
  id?: StringFilter;
  nameSurname?: StringNullableFilter;
  password?: StringFilter;
  phoneNumber?: StringNullableFilter;
};
