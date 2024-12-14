import { Bookmark as TBookmark } from "../api/bookmark/Bookmark";

export const BOOKMARK_TITLE_FIELD = "id";

export const BookmarkTitle = (record: TBookmark): string => {
  return record.id?.toString() || String(record.id);
};
