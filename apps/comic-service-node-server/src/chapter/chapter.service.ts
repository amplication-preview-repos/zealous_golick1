import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChapterServiceBase } from "./base/chapter.service.base";

@Injectable()
export class ChapterService extends ChapterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
