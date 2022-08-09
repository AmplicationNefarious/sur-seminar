
import { User } from "../user/User";
import { Reservation } from "../reservation/Reservation";

export type Apartment = {
  address: string;
  createdAt: Date;
  description: string | null;
  id: string;
  id_user?: User | null;
  name: string;
  price: number;
  reservations?: Array<Reservation>;
  updatedAt: Date;
};
