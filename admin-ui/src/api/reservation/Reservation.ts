import { Apartment } from "../apartment/Apartment";
import { Check } from "../check/Check";

export type Reservation = {
  apartment?: Apartment | null;
  check?: Check | null;
  clientEmail: string;
  createdAt: Date;
  endReservation: Date | null;
  id: string;
  startReservation: Date;
  updatedAt: Date;
};
