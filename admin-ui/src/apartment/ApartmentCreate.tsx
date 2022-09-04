import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RenterTitle } from "../renter/RenterTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";

export const ApartmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price per night" source="price" />
        <ReferenceInput source="renter.id" reference="Renter" label="Renter">
          <SelectInput optionText={RenterTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
