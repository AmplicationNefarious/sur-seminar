import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ApartmentTitle } from "../apartment/ApartmentTitle";

export const RenterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="apartmants"
          reference="Apartment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ApartmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="NameSurname" source="nameSurname" />
        <TextInput label="Password" source="password" />
        <TextInput label="PhoneNumber" source="phoneNumber" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};