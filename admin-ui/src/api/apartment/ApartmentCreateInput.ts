import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReservationCreateNestedManyWithoutApartmentsInput } from "./ReservationCreateNestedManyWithoutApartmentsInput";

export type ApartmentCreateInput = {
  address: string;
  description?: string | null;
  id_user?: UserWhereUniqueInput | null;
  name: string;
  price: number;
  reservations?: ReservationCreateNestedManyWithoutApartmentsInput;
};
