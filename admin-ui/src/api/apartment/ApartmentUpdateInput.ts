import { OwnerWhereUniqueInput } from "../owner/OwnerWhereUniqueInput";
import { ReservationUpdateManyWithoutApartmentsInput } from "./ReservationUpdateManyWithoutApartmentsInput";

export type ApartmentUpdateInput = {
  address?: string;
  description?: string | null;
  idOwner?: OwnerWhereUniqueInput | null;
  name?: string;
  price?: number;
  reservations?: ReservationUpdateManyWithoutApartmentsInput;
};
