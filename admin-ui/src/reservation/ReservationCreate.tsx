import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CheckTitle } from "../check/CheckTitle";
import { ApartmentTitle } from "../apartment/ApartmentTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="check.id" reference="Check" label="Check">
          <SelectInput optionText={CheckTitle} />
        </ReferenceInput>
        <DateTimeInput label="StartReservation" source="daysOfReservation" />
        <TextInput label="EmailOfUser" source="emailOfUser" type="email" />
        <DateTimeInput label="EndReservation" source="endReservation" />
        <ReferenceInput
          source="apartment.id"
          reference="Apartment"
          label="ID_Apartment"
        >
          <SelectInput optionText={ApartmentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
