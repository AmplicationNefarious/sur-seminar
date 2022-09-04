import { RenterWhereUniqueInput } from "../renter/RenterWhereUniqueInput";
import { ReservationCreateNestedManyWithoutApartmentsInput } from "./ReservationCreateNestedManyWithoutApartmentsInput";

export type ApartmentCreateInput = {
  address: string;
  description?: string | null;
  name: string;
  price: number;
  renter?: RenterWhereUniqueInput | null;
  reservations?: ReservationCreateNestedManyWithoutApartmentsInput;
};
