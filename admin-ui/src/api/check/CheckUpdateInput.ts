import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";

export type CheckUpdateInput = {
  amount?: number | null;
  idReservation?: ReservationWhereUniqueInput;
  paid?: boolean | null;
};
