import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReadingHistoryService } from "./readingHistory.service";
import { ReadingHistoryControllerBase } from "./base/readingHistory.controller.base";

@swagger.ApiTags("readingHistories")
@common.Controller("readingHistories")
export class ReadingHistoryController extends ReadingHistoryControllerBase {
  constructor(protected readonly service: ReadingHistoryService) {
    super(service);
  }
}
