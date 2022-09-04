import { Apartment } from "../apartment/Apartment";

export type Renter = {
  apartments?: Array<Apartment>;
  createdAt: Date;
  email: string;
  id: string;
  nameSurname: string;
  phoneNumber: string | null;
  updatedAt: Date;
};
