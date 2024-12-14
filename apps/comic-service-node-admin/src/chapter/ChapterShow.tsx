import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { COMIC_TITLE_FIELD } from "../comic/ComicTitle";

export const ChapterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
