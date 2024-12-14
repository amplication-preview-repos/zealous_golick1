import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ComicList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Comics"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Cover" source="cover" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Genres" source="genres" />
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Summary" source="summary" />
        <TextField label="Tags" source="tags" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
