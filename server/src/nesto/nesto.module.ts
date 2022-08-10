import { Module } from "@nestjs/common";
import { NestoModuleBase } from "./base/nesto.module.base";
import { NestoService } from "./nesto.service";
import { NestoController } from "./nesto.controller";
import { NestoResolver } from "./nesto.resolver";

@Module({
  imports: [NestoModuleBase],
  controllers: [NestoController],
  providers: [NestoService, NestoResolver],
  exports: [NestoService],
})
export class NestoModule {}
