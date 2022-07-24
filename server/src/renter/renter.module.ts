import { Module } from "@nestjs/common";
import { RenterModuleBase } from "./base/renter.module.base";
import { RenterService } from "./renter.service";
import { RenterResolver } from "./renter.resolver";

@Module({
  imports: [RenterModuleBase],
  providers: [RenterService, RenterResolver],
  exports: [RenterService],
})
export class RenterModule {}
