import { Comic as TComic } from "../api/comic/Comic";

export const COMIC_TITLE_FIELD = "title";

export const ComicTitle = (record: TComic): string => {
  return record.title?.toString() || String(record.id);
};
