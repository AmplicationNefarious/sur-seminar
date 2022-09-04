import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { ApartmentTitle } from "../apartment/ApartmentTitle";
import { CheckTitle } from "../check/CheckTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
