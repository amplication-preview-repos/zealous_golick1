import { Module } from "@nestjs/common";
import { BookmarkModuleBase } from "./base/bookmark.module.base";
import { BookmarkService } from "./bookmark.service";
import { BookmarkController } from "./bookmark.controller";
import { BookmarkResolver } from "./bookmark.resolver";

@Module({
  imports: [BookmarkModuleBase],
  controllers: [BookmarkController],
  providers: [BookmarkService, BookmarkResolver],
  exports: [BookmarkService],
})
export class BookmarkModule {}
