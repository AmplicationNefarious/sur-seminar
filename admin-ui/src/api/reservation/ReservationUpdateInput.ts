import { ApartmentWhereUniqueInput } from "../apartment/ApartmentWhereUniqueInput";

export type ReservationUpdateInput = {
  daysOfReservation?: Date;
  emailOfUser?: string | null;
  endReservation?: Date | null;
  idApartment?: ApartmentWhereUniqueInput;
};
