import { ReadingHistory as TReadingHistory } from "../api/readingHistory/ReadingHistory";

export const READINGHISTORY_TITLE_FIELD = "id";

export const ReadingHistoryTitle = (record: TReadingHistory): string => {
  return record.id?.toString() || String(record.id);
};
