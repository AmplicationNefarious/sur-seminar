import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";
import { CheckWhereUniqueInput } from "../check/CheckWhereUniqueInput";

export type ReservationCreateInput = {
  apartment?: ApartmentWhereUniqueInput | null;
  check?: CheckWhereUniqueInput | null;
  clientEmail: string;
  endReservation?: Date | null;
  startReservation: Date;
};
