import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CHECK_TITLE_FIELD } from "../check/CheckTitle";
import { APARTMENT_TITLE_FIELD } from "../apartment/ApartmentTitle";

export const ReservationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
