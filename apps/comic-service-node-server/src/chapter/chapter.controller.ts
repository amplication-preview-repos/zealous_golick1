import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChapterService } from "./chapter.service";
import { ChapterControllerBase } from "./base/chapter.controller.base";

@swagger.ApiTags("chapters")
@common.Controller("chapters")
export class ChapterController extends ChapterControllerBase {
  constructor(protected readonly service: ChapterService) {
    super(service);
  }
}
