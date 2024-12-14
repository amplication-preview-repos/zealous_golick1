import { ChapterWhereInput } from "./ChapterWhereInput";
import { ChapterOrderByInput } from "./ChapterOrderByInput";

export type ChapterFindManyArgs = {
  where?: ChapterWhereInput;
  orderBy?: Array<ChapterOrderByInput>;
  skip?: number;
  take?: number;
};
