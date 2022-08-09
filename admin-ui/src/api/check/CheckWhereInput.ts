import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationWhereUniqueInput } from "../reservation/ReservationWhereUniqueInput";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CheckWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  idReservation?: ReservationWhereUniqueInput;
  paid?: BooleanNullableFilter;
};
