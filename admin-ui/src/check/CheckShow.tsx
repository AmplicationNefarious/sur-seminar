import * as React from "react";
<<<<<<< HEAD

=======
>>>>>>> main
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
<<<<<<< HEAD
  ReferenceField,
  BooleanField,
} from "react-admin";

import { RESERVATION_TITLE_FIELD } from "../reservation/ReservationTitle";

=======
  BooleanField,
} from "react-admin";

>>>>>>> main
export const CheckShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
<<<<<<< HEAD
        <ReferenceField
          label="Reservation"
          source="reservation.id"
          reference="Reservation"
        >
          <TextField source={RESERVATION_TITLE_FIELD} />
        </ReferenceField>
=======
        <TextField label="ID_Reservation" source="idReservation" />
>>>>>>> main
        <BooleanField label="Paid" source="paid" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
