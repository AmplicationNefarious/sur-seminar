import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHECK_TITLE_FIELD } from "../check/CheckTitle";
import { APARTMENT_TITLE_FIELD } from "../apartment/ApartmentTitle";

export const ReservationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reservations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Check" source="check.id" reference="Check">
          <TextField source={CHECK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Client Email" source="clientEmail" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="End" source="endReservation" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Apartment"
          source="apartment.id"
          reference="Apartment"
        >
          <TextField source={APARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start" source="startReservation" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
