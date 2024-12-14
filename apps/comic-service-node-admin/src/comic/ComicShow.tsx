import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COMIC_TITLE_FIELD } from "./ComicTitle";

export const ComicShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cover" source="cover" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Genres" source="genres" />
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Summary" source="summary" />
        <TextField label="Tags" source="tags" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Chapter"
          target="comicId"
          label="Chapters"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Comic" source="comic.id" reference="Comic">
              <TextField source={COMIC_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Images" source="images" />
            <TextField label="Number" source="numberField" />
            <TextField label="ReleaseDate" source="releaseDate" />
            <TextField label="Thumbnail" source="thumbnail" />
            <TextField label="Title" source="title" />
            <TextField label="UpdateDate" source="updateDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
