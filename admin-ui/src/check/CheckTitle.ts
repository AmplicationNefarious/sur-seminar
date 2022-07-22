import { Check as TCheck } from "../api/check/Check";

export const CHECK_TITLE_FIELD = "idReservation";

export const CheckTitle = (record: TCheck): string => {
  return record.idReservation || record.id;
};
