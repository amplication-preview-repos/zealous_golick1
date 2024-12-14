import * as graphql from "@nestjs/graphql";
import { ChapterResolverBase } from "./base/chapter.resolver.base";
import { Chapter } from "./base/Chapter";
import { ChapterService } from "./chapter.service";

@graphql.Resolver(() => Chapter)
export class ChapterResolver extends ChapterResolverBase {
  constructor(protected readonly service: ChapterService) {
    super(service);
  }
}
