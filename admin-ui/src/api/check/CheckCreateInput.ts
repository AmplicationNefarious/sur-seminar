import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type CheckCreateInput = {
  amount?: number | null;
  idReservation: ReservationWhereUniqueInput;
  paid?: boolean | null;
};
