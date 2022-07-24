import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApartmentTitle } from "../apartment/ApartmentTitle";

export const ReservationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
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
