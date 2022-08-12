import { Module } from "@nestjs/common";
import { RenterModuleBase } from "./base/renter.module.base";
import { RenterService } from "./renter.service";
import { RenterResolver } from "./renter.resolver";
import { RenterController } from "./renter.controller"


@Module({
  imports: [RenterModuleBase],
  controllers: [RenterController],
  providers: [RenterService, RenterResolver],
  exports: [RenterService],
})
export class RenterModule {}
