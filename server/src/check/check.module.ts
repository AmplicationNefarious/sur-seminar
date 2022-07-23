import { Module } from "@nestjs/common";
import { CheckModuleBase } from "./base/check.module.base";
import { CheckService } from "./check.service";
import { CheckResolver } from "./check.resolver";

@Module({
  imports: [CheckModuleBase],
  providers: [CheckService, CheckResolver],
  exports: [CheckService],
})
export class CheckModule {}
