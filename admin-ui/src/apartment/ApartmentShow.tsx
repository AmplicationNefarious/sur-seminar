import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CHECK_TITLE_FIELD } from "../check/CheckTitle";
import { APARTMENT_TITLE_FIELD } from "./ApartmentTitle";

export const ApartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Price per night" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reservation"
          target="ApartmentId"
          label="Reservations"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Check" source="check.id" reference="Check">
              <TextField source={CHECK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="StartReservation" source="daysOfReservation" />
            <TextField label="EmailOfUser" source="emailOfUser" />
            <TextField label="EndReservation" source="endReservation" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="ID_Apartment"
              source="apartment.id"
              reference="Apartment"
            >
              <TextField source={APARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
