import { Check } from "../check/Check";
import { Apartment } from "../apartment/Apartment";

export type Reservation = {
  check?: Check | null;
  createdAt: Date;
  daysOfReservation: Date;
  emailOfUser: string | null;
  endReservation: Date | null;
  id: string;
  idApartment?: Apartment;
  updatedAt: Date;
};
