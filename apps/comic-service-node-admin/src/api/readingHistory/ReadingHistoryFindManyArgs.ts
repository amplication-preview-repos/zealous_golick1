import { ReadingHistoryWhereInput } from "./ReadingHistoryWhereInput";
import { ReadingHistoryOrderByInput } from "./ReadingHistoryOrderByInput";

export type ReadingHistoryFindManyArgs = {
  where?: ReadingHistoryWhereInput;
  orderBy?: Array<ReadingHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
