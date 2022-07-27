import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  checkId?: SortOrder;
  createdAt?: SortOrder;
  daysOfReservation?: SortOrder;
  emailOfUser?: SortOrder;
  endReservation?: SortOrder;
  id?: SortOrder;
  idApartmentId?: SortOrder;
  updatedAt?: SortOrder;
};
