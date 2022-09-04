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

import { CheckTitle } from "../check/CheckTitle";
import { ApartmentTitle } from "../apartment/ApartmentTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="check.id" reference="Check" label="Check">
          <SelectInput optionText={CheckTitle} />
        </ReferenceInput>
        <TextInput label="Client Email" source="clientEmail" type="email" />
        <DateTimeInput label="End" source="endReservation" />
        <ReferenceInput
          source="apartment.id"
          reference="Apartment"
          label="Apartment"
        >
          <SelectInput optionText={ApartmentTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start" source="startReservation" />
      </SimpleForm>
    </Edit>
  );
};
