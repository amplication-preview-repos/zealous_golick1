import { SortOrder } from "../../util/SortOrder";

export type ChapterOrderByInput = {
  comicId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  numberField?: SortOrder;
  releaseDate?: SortOrder;
  thumbnail?: SortOrder;
  title?: SortOrder;
  updateDate?: SortOrder;
  updatedAt?: SortOrder;
};
