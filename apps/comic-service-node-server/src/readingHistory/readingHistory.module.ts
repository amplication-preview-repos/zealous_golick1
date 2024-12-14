import { Module } from "@nestjs/common";
import { ReadingHistoryModuleBase } from "./base/readingHistory.module.base";
import { ReadingHistoryService } from "./readingHistory.service";
import { ReadingHistoryController } from "./readingHistory.controller";
import { ReadingHistoryResolver } from "./readingHistory.resolver";

@Module({
  imports: [ReadingHistoryModuleBase],
  controllers: [ReadingHistoryController],
  providers: [ReadingHistoryService, ReadingHistoryResolver],
  exports: [ReadingHistoryService],
})
export class ReadingHistoryModule {}
