import { SortOrder } from "../../util/SortOrder";

export type ApartmentOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  id_userId?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
