import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ApartmentTitle } from "../apartment/ApartmentTitle";

export const RenterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
