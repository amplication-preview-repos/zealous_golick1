import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComicService } from "./comic.service";
import { ComicControllerBase } from "./base/comic.controller.base";

@swagger.ApiTags("comics")
@common.Controller("comics")
export class ComicController extends ComicControllerBase {
  constructor(protected readonly service: ComicService) {
    super(service);
  }
}
