import { ChapterCreateNestedManyWithoutComicsInput } from "./ChapterCreateNestedManyWithoutComicsInput";
import { InputJsonValue } from "../../types";

export type ComicCreateInput = {
  chapters?: ChapterCreateNestedManyWithoutComicsInput;
  cover?: InputJsonValue;
  genres?: Array<"Option1">;
  status?: "Option1" | null;
  summary?: string | null;
  tags?: Array<"Option1">;
  title?: string | null;
};
