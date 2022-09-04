import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  apartmentId?: SortOrder;
  checkId?: SortOrder;
  clientEmail?: SortOrder;
  createdAt?: SortOrder;
  endReservation?: SortOrder;
  id?: SortOrder;
  startReservation?: SortOrder;
  updatedAt?: SortOrder;
};
