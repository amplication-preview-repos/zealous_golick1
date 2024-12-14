import { Chapter } from "../chapter/Chapter";
import { JsonValue } from "type-fest";

export type Comic = {
  chapters?: Array<Chapter>;
  cover: JsonValue;
  createdAt: Date;
  genres?: Array<"Option1">;
  id: string;
  status?: "Option1" | null;
  summary: string | null;
  tags?: Array<"Option1">;
  title: string | null;
  updatedAt: Date;
};
