import { ReservationUpdateManyWithoutApartmentsInput } from "./ReservationUpdateManyWithoutApartmentsInput";

export type ApartmentUpdateInput = {
  address?: string;
  description?: string | null;
  name?: string;
  price?: number;
  reservations?: ReservationUpdateManyWithoutApartmentsInput;
};
