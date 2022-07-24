import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  createdAt?: SortOrder;
  daysOfReservation?: SortOrder;
  emailOfUser?: SortOrder;
  endReservation?: SortOrder;
  id?: SortOrder;
  idApartmentId?: SortOrder;
  updatedAt?: SortOrder;
};
