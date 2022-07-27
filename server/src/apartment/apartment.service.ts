import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ApartmentServiceBase } from "./base/apartment.service.base";

@Injectable()
export class ApartmentService extends ApartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
