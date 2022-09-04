import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ApartmentTitle } from "../apartment/ApartmentTitle";
import { CheckTitle } from "../check/CheckTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="apartment.id"
          reference="Apartment"
          label="Apartment"
        >
          <SelectInput optionText={ApartmentTitle} />
        </ReferenceInput>
        <ReferenceInput source="check.id" reference="Check" label="Check">
          <SelectInput optionText={CheckTitle} />
        </ReferenceInput>
        <TextInput label="Client Email" source="clientEmail" type="email" />
        <DateTimeInput label="End" source="endReservation" />
        <DateTimeInput label="Start" source="startReservation" />
      </SimpleForm>
    </Edit>
  );
};
