import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { CheckWhereUniqueInput } from "../check/CheckWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ReservationWhereInput = {
  apartment?: ApartmentWhereUniqueInput;
  check?: CheckWhereUniqueInput;
  clientEmail?: StringFilter;
  endReservation?: DateTimeNullableFilter;
  id?: StringFilter;
  startReservation?: DateTimeFilter;
};
