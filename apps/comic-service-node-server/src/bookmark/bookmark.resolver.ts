import * as graphql from "@nestjs/graphql";
import { BookmarkResolverBase } from "./base/bookmark.resolver.base";
import { Bookmark } from "./base/Bookmark";
import { BookmarkService } from "./bookmark.service";

@graphql.Resolver(() => Bookmark)
export class BookmarkResolver extends BookmarkResolverBase {
  constructor(protected readonly service: BookmarkService) {
    super(service);
  }
}
