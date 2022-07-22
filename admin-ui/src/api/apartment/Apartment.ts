import { Owner } from "../owner/Owner";
import { Reservation } from "../reservation/Reservation";

export type Apartment = {
  address: string;
  createdAt: Date;
  description: string | null;
  id: string;
  idOwner?: Owner | null;
  name: string;
  price: number;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
