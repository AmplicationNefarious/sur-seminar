import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApartmentTitle } from "../apartment/ApartmentTitle";

export const ReservationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
