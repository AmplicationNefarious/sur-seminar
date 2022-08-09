import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OwnerWhereUniqueInput } from "../owner/OwnerWhereUniqueInput";
import { FloatFilter } from "../../util/FloatFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type ApartmentWhereInput = {
  address?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  idOwner?: OwnerWhereUniqueInput;
  name?: StringFilter;
  price?: FloatFilter;
  reservations?: ReservationListRelationFilter;
};
