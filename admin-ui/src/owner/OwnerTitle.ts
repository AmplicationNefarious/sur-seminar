import { Owner as TOwner } from "../api/owner/Owner";

export const OWNER_TITLE_FIELD = "nameSurname";

export const OwnerTitle = (record: TOwner): string => {
  return record.nameSurname || record.id;
};
