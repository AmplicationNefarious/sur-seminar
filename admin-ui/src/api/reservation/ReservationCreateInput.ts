import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";

export type ReservationCreateInput = {
  daysOfReservation: Date;
  emailOfUser?: string | null;
  endReservation?: Date | null;
  idApartment: ApartmentWhereUniqueInput;
};
