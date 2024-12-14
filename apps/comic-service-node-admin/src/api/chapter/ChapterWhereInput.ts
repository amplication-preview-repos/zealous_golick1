import { ComicWhereUniqueInput } from "../comic/ComicWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChapterWhereInput = {
  comic?: ComicWhereUniqueInput;
  id?: StringFilter;
  numberField?: IntNullableFilter;
  releaseDate?: DateTimeNullableFilter;
  thumbnail?: JsonFilter;
  title?: StringNullableFilter;
  updateDate?: DateTimeNullableFilter;
};
