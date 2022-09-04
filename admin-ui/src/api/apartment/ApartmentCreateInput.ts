import { ReservationCreateNestedManyWithoutApartmentsInput } from "./ReservationCreateNestedManyWithoutApartmentsInput";

export type ApartmentCreateInput = {
  address: string;
  description?: string | null;
  name: string;
  price: number;
  reservations?: ReservationCreateNestedManyWithoutApartmentsInput;
};
