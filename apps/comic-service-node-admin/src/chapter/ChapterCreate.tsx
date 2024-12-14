import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ComicTitle } from "../comic/ComicTitle";

export const ChapterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="comic.id" reference="Comic" label="Comic">
          <SelectInput optionText={ComicTitle} />
        </ReferenceInput>
        <SelectArrayInput
          label="Images"
          source="images"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Number" source="numberField" />
        <DateTimeInput label="ReleaseDate" source="releaseDate" />
        <div />
        <TextInput label="Title" source="title" />
        <DateTimeInput label="UpdateDate" source="updateDate" />
      </SimpleForm>
    </Create>
  );
};
