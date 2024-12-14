import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BookmarkService } from "./bookmark.service";
import { BookmarkControllerBase } from "./base/bookmark.controller.base";

@swagger.ApiTags("bookmarks")
@common.Controller("bookmarks")
export class BookmarkController extends BookmarkControllerBase {
  constructor(protected readonly service: BookmarkService) {
    super(service);
  }
}
