import { CheckWhereUniqueInput } from "../check/CheckWhereUniqueInput";
import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";

export type ReservationCreateInput = {
  check?: CheckWhereUniqueInput | null;
  clientEmail: string;
  endReservation?: Date | null;
  idApartment: ApartmentWhereUniqueInput;
  startReservation: Date;
};
