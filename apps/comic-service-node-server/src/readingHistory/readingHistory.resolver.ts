import * as graphql from "@nestjs/graphql";
import { ReadingHistoryResolverBase } from "./base/readingHistory.resolver.base";
import { ReadingHistory } from "./base/ReadingHistory";
import { ReadingHistoryService } from "./readingHistory.service";

@graphql.Resolver(() => ReadingHistory)
export class ReadingHistoryResolver extends ReadingHistoryResolverBase {
  constructor(protected readonly service: ReadingHistoryService) {
    super(service);
  }
}
