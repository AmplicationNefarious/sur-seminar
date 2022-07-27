import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
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
