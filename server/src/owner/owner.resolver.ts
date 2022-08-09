import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OwnerResolverBase } from "./base/owner.resolver.base";
import { Owner } from "./base/Owner";
import { OwnerService } from "./owner.service";

@graphql.Resolver(() => Owner)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OwnerResolver extends OwnerResolverBase {
  constructor(
    protected readonly service: OwnerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
