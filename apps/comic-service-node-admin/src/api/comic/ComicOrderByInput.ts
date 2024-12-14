import { SortOrder } from "../../util/SortOrder";

export type ComicOrderByInput = {
  cover?: SortOrder;
  createdAt?: SortOrder;
  genres?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  summary?: SortOrder;
  tags?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
