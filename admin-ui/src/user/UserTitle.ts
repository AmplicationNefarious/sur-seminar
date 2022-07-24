import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "nameSurname";

export const UserTitle = (record: TUser): string => {
  return record.nameSurname || record.id;
};
