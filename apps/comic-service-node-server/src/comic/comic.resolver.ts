import * as graphql from "@nestjs/graphql";
import { ComicResolverBase } from "./base/comic.resolver.base";
import { Comic } from "./base/Comic";
import { ComicService } from "./comic.service";

@graphql.Resolver(() => Comic)
export class ComicResolver extends ComicResolverBase {
  constructor(protected readonly service: ComicService) {
    super(service);
  }
}
