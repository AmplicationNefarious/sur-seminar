import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APARTMENT_TITLE_FIELD } from "./ApartmentTitle";
import { CHECK_TITLE_FIELD } from "../check/CheckTitle";
import { RENTER_TITLE_FIELD } from "../renter/RenterTitle";

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
        <ReferenceField label="Renter" source="renter.id" reference="Renter">
          <TextField source={RENTER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reservation"
          target="ApartmentId"
          label="Reservations"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Apartment"
              source="apartment.id"
              reference="Apartment"
            >
              <TextField source={APARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Check" source="check.id" reference="Check">
              <TextField source={CHECK_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Client Email" source="clientEmail" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="End" source="endReservation" />
            <TextField label="ID" source="id" />
            <TextField label="Start" source="startReservation" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
