import { RenterUpdateManyWithoutApartmentsInput } from "./RenterUpdateManyWithoutApartmentsInput";
import { ReservationUpdateManyWithoutApartmentsInput } from "./ReservationUpdateManyWithoutApartmentsInput";

export type ApartmentUpdateInput = {
  address?: string;
  description?: string | null;
  name?: string;
  price?: number;
  renters?: RenterUpdateManyWithoutApartmentsInput;
  reservations?: ReservationUpdateManyWithoutApartmentsInput;
};
