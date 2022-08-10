import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { NestoServiceBase } from "./base/nesto.service.base";

@Injectable()
export class NestoService extends NestoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
