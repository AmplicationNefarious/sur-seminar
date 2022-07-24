import { Apartment } from "../apartment/Apartment";

export type User = {
  apartments?: Array<Apartment>;
  createdAt: Date;
  email: string;
  id: string;
  nameSurname: string | null;
  phoneNumber: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
