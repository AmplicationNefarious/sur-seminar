import { CheckWhereUniqueInput } from "../check/CheckWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type ReservationWhereInput = {
  check?: CheckWhereUniqueInput;
  clientEmail?: StringFilter;
  endReservation?: DateTimeNullableFilter;
  id?: StringFilter;
  idApartment?: ApartmentWhereUniqueInput;
  startReservation?: DateTimeFilter;
};
