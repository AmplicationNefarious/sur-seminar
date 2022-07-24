import { SortOrder } from "../../util/SortOrder";

export type RenterOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nameSurname?: SortOrder;
  password?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
