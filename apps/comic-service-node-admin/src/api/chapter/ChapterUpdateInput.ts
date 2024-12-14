import { ComicWhereUniqueInput } from "../comic/ComicWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ChapterUpdateInput = {
  comic?: ComicWhereUniqueInput | null;
  images?: Array<"Option1">;
  numberField?: number | null;
  releaseDate?: Date | null;
  thumbnail?: InputJsonValue;
  title?: string | null;
  updateDate?: Date | null;
};
