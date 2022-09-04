import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  checkId?: SortOrder;
  clientEmail?: SortOrder;
  createdAt?: SortOrder;
  endReservation?: SortOrder;
  id?: SortOrder;
  idApartmentId?: SortOrder;
  startReservation?: SortOrder;
  updatedAt?: SortOrder;
};
