import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NestoService } from "./nesto.service";
import { NestoControllerBase } from "./base/nesto.controller.base";

@swagger.ApiTags("nestos")
@common.Controller("nestos")
export class NestoController extends NestoControllerBase {
  constructor(
    protected readonly service: NestoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
