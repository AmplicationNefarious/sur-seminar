import { Renter as TRenter } from "../api/renter/Renter";

export const RENTER_TITLE_FIELD = "nameSurname";

export const RenterTitle = (record: TRenter): string => {
  return record.nameSurname || record.id;
};
