import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CheckWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  idReservation?: StringFilter;
<<<<<<< HEAD
  paid?: BooleanNullableFilter;
=======
  payed?: BooleanNullableFilter;
>>>>>>> main
};
