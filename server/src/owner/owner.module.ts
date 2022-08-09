import { Module } from "@nestjs/common";
import { OwnerModuleBase } from "./base/owner.module.base";
import { OwnerService } from "./owner.service";
import { OwnerResolver } from "./owner.resolver";

@Module({
  imports: [OwnerModuleBase],
  providers: [OwnerService, OwnerResolver],
  exports: [OwnerService],
})
export class OwnerModule {}
