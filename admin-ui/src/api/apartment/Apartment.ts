import { Reservation } from "../reservation/Reservation";

export type Apartment = {
  address: string;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  price: number;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
