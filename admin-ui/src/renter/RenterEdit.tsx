import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RenterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name and surname" source="nameSurname" />
        <TextInput label="Phone number" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
