import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { AclValidateRequestInterceptor } from "src/interceptors/aclValidateRequest.interceptor";
import { User } from "./base/User";
import { UserWhereUniqueInput } from "./base/UserWhereUniqueInput";
import { Response } from "express";
import { Get, HttpStatus, Res } from "@nestjs/common";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
  @Get("test")
  test(@Res() response: Response): Response<void> {
    return response.status(HttpStatus.NO_CONTENT).send();
  }
}
