import { Check } from "../check/Check";
import { Apartment } from "../apartment/Apartment";

export type Reservation = {
  check?: Check | null;
  clientEmail: string;
  createdAt: Date;
  endReservation: Date | null;
  id: string;
  idApartment?: Apartment;
  startReservation: Date;
  updatedAt: Date;
};
