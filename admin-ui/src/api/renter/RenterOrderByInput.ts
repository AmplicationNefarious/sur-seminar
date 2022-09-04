import { SortOrder } from "../../util/SortOrder";

export type RenterOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nameSurname?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
