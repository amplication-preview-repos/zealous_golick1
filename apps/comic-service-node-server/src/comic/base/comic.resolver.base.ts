/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Comic } from "./Comic";
import { ComicCountArgs } from "./ComicCountArgs";
import { ComicFindManyArgs } from "./ComicFindManyArgs";
import { ComicFindUniqueArgs } from "./ComicFindUniqueArgs";
import { CreateComicArgs } from "./CreateComicArgs";
import { UpdateComicArgs } from "./UpdateComicArgs";
import { DeleteComicArgs } from "./DeleteComicArgs";
import { ChapterFindManyArgs } from "../../chapter/base/ChapterFindManyArgs";
import { Chapter } from "../../chapter/base/Chapter";
import { ComicService } from "../comic.service";
@graphql.Resolver(() => Comic)
export class ComicResolverBase {
  constructor(protected readonly service: ComicService) {}

  async _comicsMeta(
    @graphql.Args() args: ComicCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Comic])
  async comics(@graphql.Args() args: ComicFindManyArgs): Promise<Comic[]> {
    return this.service.comics(args);
  }

  @graphql.Query(() => Comic, { nullable: true })
  async comic(
    @graphql.Args() args: ComicFindUniqueArgs
  ): Promise<Comic | null> {
    const result = await this.service.comic(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Comic)
  async createComic(@graphql.Args() args: CreateComicArgs): Promise<Comic> {
    return await this.service.createComic({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Comic)
  async updateComic(
    @graphql.Args() args: UpdateComicArgs
  ): Promise<Comic | null> {
    try {
      return await this.service.updateComic({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Comic)
  async deleteComic(
    @graphql.Args() args: DeleteComicArgs
  ): Promise<Comic | null> {
    try {
      return await this.service.deleteComic(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Chapter], { name: "chapters" })
  async findChapters(
    @graphql.Parent() parent: Comic,
    @graphql.Args() args: ChapterFindManyArgs
  ): Promise<Chapter[]> {
    const results = await this.service.findChapters(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
