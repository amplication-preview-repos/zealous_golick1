import { ComicWhereInput } from "./ComicWhereInput";
import { ComicOrderByInput } from "./ComicOrderByInput";

export type ComicFindManyArgs = {
  where?: ComicWhereInput;
  orderBy?: Array<ComicOrderByInput>;
  skip?: number;
  take?: number;
};
