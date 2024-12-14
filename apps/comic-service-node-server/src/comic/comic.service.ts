import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComicServiceBase } from "./base/comic.service.base";

@Injectable()
export class ComicService extends ComicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
