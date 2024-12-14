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
import { ReadingHistory } from "./ReadingHistory";
import { ReadingHistoryCountArgs } from "./ReadingHistoryCountArgs";
import { ReadingHistoryFindManyArgs } from "./ReadingHistoryFindManyArgs";
import { ReadingHistoryFindUniqueArgs } from "./ReadingHistoryFindUniqueArgs";
import { DeleteReadingHistoryArgs } from "./DeleteReadingHistoryArgs";
import { ReadingHistoryService } from "../readingHistory.service";
@graphql.Resolver(() => ReadingHistory)
export class ReadingHistoryResolverBase {
  constructor(protected readonly service: ReadingHistoryService) {}

  async _readingHistoriesMeta(
    @graphql.Args() args: ReadingHistoryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ReadingHistory])
  async readingHistories(
    @graphql.Args() args: ReadingHistoryFindManyArgs
  ): Promise<ReadingHistory[]> {
    return this.service.readingHistories(args);
  }

  @graphql.Query(() => ReadingHistory, { nullable: true })
  async readingHistory(
    @graphql.Args() args: ReadingHistoryFindUniqueArgs
  ): Promise<ReadingHistory | null> {
    const result = await this.service.readingHistory(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ReadingHistory)
  async deleteReadingHistory(
    @graphql.Args() args: DeleteReadingHistoryArgs
  ): Promise<ReadingHistory | null> {
    try {
      return await this.service.deleteReadingHistory(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
