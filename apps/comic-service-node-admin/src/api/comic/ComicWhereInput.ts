import { ChapterListRelationFilter } from "../chapter/ChapterListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ComicWhereInput = {
  chapters?: ChapterListRelationFilter;
  cover?: JsonFilter;
  id?: StringFilter;
  status?: "Option1";
  summary?: StringNullableFilter;
  title?: StringNullableFilter;
};
