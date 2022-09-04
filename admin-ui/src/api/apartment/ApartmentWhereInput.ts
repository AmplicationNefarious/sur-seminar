import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { RenterWhereUniqueInput } from "../renter/RenterWhereUniqueInput";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type ApartmentWhereInput = {
  address?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  price?: FloatFilter;
  renter?: RenterWhereUniqueInput;
  reservations?: ReservationListRelationFilter;
};
