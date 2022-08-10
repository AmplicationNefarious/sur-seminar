import { Reservation } from "../reservation/Reservation";

export type Check = {
  amount: number | null;
  createdAt: Date;
  id: string;
  idReservation?: Reservation;
  paid: boolean | null;
  updatedAt: Date;
};
