import { Apartment } from "../apartment/Apartment";

export type Owner = {
  apartments?: Array<Apartment>;
  createdAt: Date;
  email: string;
  id: string;
  nameSurname: string | null;
  password: string;
  phoneNumber: string | null;
  updatedAt: Date;
};
