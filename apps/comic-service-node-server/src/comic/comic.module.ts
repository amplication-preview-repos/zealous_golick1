import { Module } from "@nestjs/common";
import { ComicModuleBase } from "./base/comic.module.base";
import { ComicService } from "./comic.service";
import { ComicController } from "./comic.controller";
import { ComicResolver } from "./comic.resolver";

@Module({
  imports: [ComicModuleBase],
  controllers: [ComicController],
  providers: [ComicService, ComicResolver],
  exports: [ComicService],
})
export class ComicModule {}
