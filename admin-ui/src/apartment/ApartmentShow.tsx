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
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ApartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="ID_User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Name" source="name" />
        <TextField label="PriceANight" source="price" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Reservation"
          target="ApartmentId"
          label="Reservations"
        >
          <Datagrid rowClick="show">
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
