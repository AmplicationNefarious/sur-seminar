import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RenterServiceBase } from "./base/renter.service.base";

@Injectable()
export class RenterService extends RenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
