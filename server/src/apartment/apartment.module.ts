import { Module } from "@nestjs/common";
import { ApartmentModuleBase } from "./base/apartment.module.base";
import { ApartmentService } from "./apartment.service";
import { ApartmentResolver } from "./apartment.resolver";

@Module({
  imports: [ApartmentModuleBase],
  providers: [ApartmentService, ApartmentResolver],
  exports: [ApartmentService],
})
export class ApartmentModule {}
