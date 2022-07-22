import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OwnerTitle } from "../owner/OwnerTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";

export const ApartmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput source="owner.id" reference="Owner" label="ID_Owner">
          <SelectInput optionText={OwnerTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
        <NumberInput label="PriceANight" source="price" />
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
