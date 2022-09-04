import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RENTER_TITLE_FIELD } from "./RenterTitle";

export const RenterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Name and surname" source="nameSurname" />
        <TextField label="Password" source="password" />
        <TextField label="Phone number" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Apartment"
          target="RenterId"
          label="Apartments"
        >
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Price per night" source="price" />
            <ReferenceField
              label="Renter"
              source="renter.id"
              reference="Renter"
            >
              <TextField source={RENTER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
