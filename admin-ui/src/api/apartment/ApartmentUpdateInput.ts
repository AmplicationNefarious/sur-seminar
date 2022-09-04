import { RenterWhereUniqueInput } from "../renter/RenterWhereUniqueInput";
import { ReservationUpdateManyWithoutApartmentsInput } from "./ReservationUpdateManyWithoutApartmentsInput";

export type ApartmentUpdateInput = {
  address?: string;
  description?: string | null;
  name?: string;
  price?: number;
  renter?: RenterWhereUniqueInput | null;
  reservations?: ReservationUpdateManyWithoutApartmentsInput;
};
