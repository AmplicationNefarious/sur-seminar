import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CheckServiceBase } from "./base/check.service.base";

@Injectable()
export class CheckService extends CheckServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
