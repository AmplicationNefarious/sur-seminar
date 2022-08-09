import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { RESERVATION_TITLE_FIELD } from "../reservation/ReservationTitle";

export const CheckList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Checks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Reservation"
          source="reservation.id"
          reference="Reservation"
        >
          <TextField source={RESERVATION_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Paid" source="paid" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
