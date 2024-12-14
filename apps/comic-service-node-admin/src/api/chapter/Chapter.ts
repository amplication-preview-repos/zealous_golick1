import { Comic } from "../comic/Comic";
import { JsonValue } from "type-fest";

export type Chapter = {
  comic?: Comic | null;
  createdAt: Date;
  id: string;
  images?: Array<"Option1">;
  numberField: number | null;
  releaseDate: Date | null;
  thumbnail: JsonValue;
  title: string | null;
  updateDate: Date | null;
  updatedAt: Date;
};
