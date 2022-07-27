import { Module } from "@nestjs/common";
import { ReservationModuleBase } from "./base/reservation.module.base";
import { ReservationService } from "./reservation.service";
import { ReservationResolver } from "./reservation.resolver";

@Module({
  imports: [ReservationModuleBase],
  providers: [ReservationService, ReservationResolver],
  exports: [ReservationService],
})
export class ReservationModule {}
