import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ReservationTitle } from "../reservation/ReservationTitle";

export const CheckEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="reservation.id"
          reference="Reservation"
          label="Reservation"
        >
          <SelectInput optionText={ReservationTitle} />
        </ReferenceInput>
        <BooleanInput label="Paid" source="paid" />
      </SimpleForm>
    </Edit>
  );
};
