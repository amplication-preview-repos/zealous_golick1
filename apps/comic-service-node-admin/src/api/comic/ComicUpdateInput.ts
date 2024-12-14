import { ChapterUpdateManyWithoutComicsInput } from "./ChapterUpdateManyWithoutComicsInput";
import { InputJsonValue } from "../../types";

export type ComicUpdateInput = {
  chapters?: ChapterUpdateManyWithoutComicsInput;
  cover?: InputJsonValue;
  genres?: Array<"Option1">;
  status?: "Option1" | null;
  summary?: string | null;
  tags?: Array<"Option1">;
  title?: string | null;
};
