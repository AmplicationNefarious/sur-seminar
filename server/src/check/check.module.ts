import { Module } from "@nestjs/common";
import { CheckModuleBase } from "./base/check.module.base";
import { CheckService } from "./check.service";
import { CheckResolver } from "./check.resolver";
import { CheckController } from "./check.controller"
@Module({
  imports: [CheckModuleBase],
  controllers : [CheckController],
  providers: [CheckService, CheckResolver],
  exports: [CheckService],
})
export class CheckModule {}
