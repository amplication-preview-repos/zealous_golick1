import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMIC_TITLE_FIELD } from "../comic/ComicTitle";

export const ChapterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Chapters"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
