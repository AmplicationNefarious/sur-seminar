import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RenterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name and surname" source="nameSurname" />
        <TextInput label="Phone number" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
