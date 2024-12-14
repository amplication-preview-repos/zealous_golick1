import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReadingHistoryServiceBase } from "./base/readingHistory.service.base";

@Injectable()
export class ReadingHistoryService extends ReadingHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
