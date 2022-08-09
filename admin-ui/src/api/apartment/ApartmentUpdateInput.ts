import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReservationUpdateManyWithoutApartmentsInput } from "./ReservationUpdateManyWithoutApartmentsInput";

export type ApartmentUpdateInput = {
  address?: string;
  description?: string | null;
  id_user?: UserWhereUniqueInput | null;
  name?: string;
  price?: number;
  reservations?: ReservationUpdateManyWithoutApartmentsInput;
};
