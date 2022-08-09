import { Check as TCheck } from "../api/check/Check";

<<<<<<< HEAD
export const CHECK_TITLE_FIELD = "id";

export const CheckTitle = (record: TCheck): string => {
  return record.id || record.id;
=======
export const CHECK_TITLE_FIELD = "idReservation";

export const CheckTitle = (record: TCheck): string => {
  return record.idReservation || record.id;
>>>>>>> main
};
