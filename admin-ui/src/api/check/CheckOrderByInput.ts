import { SortOrder } from "../../util/SortOrder";

export type CheckOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  idReservation?: SortOrder;
  paid?: SortOrder;
  updatedAt?: SortOrder;
};
