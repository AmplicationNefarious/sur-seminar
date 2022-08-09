import { OwnerWhereUniqueInput } from "../owner/OwnerWhereUniqueInput";
import { ReservationCreateNestedManyWithoutApartmentsInput } from "./ReservationCreateNestedManyWithoutApartmentsInput";

export type ApartmentCreateInput = {
  address: string;
  description?: string | null;
  idOwner?: OwnerWhereUniqueInput | null;
  name: string;
  price: number;
  reservations?: ReservationCreateNestedManyWithoutApartmentsInput;
};
