import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";

export type ReservationWhereInput = {
  daysOfReservation?: DateTimeFilter;
  emailOfUser?: StringNullableFilter;
  endReservation?: DateTimeNullableFilter;
  id?: StringFilter;
  idApartment?: ApartmentWhereUniqueInput;
};
