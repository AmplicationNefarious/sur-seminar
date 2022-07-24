import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type ApartmentWhereInput = {
  address?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  id_user?: UserWhereUniqueInput;
  name?: StringFilter;
  price?: FloatFilter;
  reservations?: ReservationListRelationFilter;
};
