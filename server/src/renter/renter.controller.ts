import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RenterService } from "./renter.service";
import { RenterControllerBase } from "./base/renter.controller.base";

@swagger.ApiTags("renters")
@common.Controller("renters")
export class RenterController extends RenterControllerBase {
  constructor(
    protected readonly service: RenterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
