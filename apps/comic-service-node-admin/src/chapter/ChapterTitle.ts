import { Chapter as TChapter } from "../api/chapter/Chapter";

export const CHAPTER_TITLE_FIELD = "title";

export const ChapterTitle = (record: TChapter): string => {
  return record.title?.toString() || String(record.id);
};
