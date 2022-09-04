import { SortOrder } from "../../util/SortOrder";

export type ApartmentOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  renterId?: SortOrder;
  updatedAt?: SortOrder;
};
