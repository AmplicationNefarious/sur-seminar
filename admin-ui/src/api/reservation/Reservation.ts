import { Apartment } from "../apartment/Apartment";

export type Reservation = {
  createdAt: Date;
  daysOfReservation: Date;
  emailOfUser: string | null;
  endReservation: Date | null;
  id: string;
  idApartment?: Apartment;
  updatedAt: Date;
};
