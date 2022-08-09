import { CheckWhereUniqueInput } from "../check/CheckWhereUniqueInput";
import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";

export type ReservationCreateInput = {
  check?: CheckWhereUniqueInput | null;
  daysOfReservation: Date;
  emailOfUser?: string | null;
  endReservation?: Date | null;
  idApartment: ApartmentWhereUniqueInput;
};
