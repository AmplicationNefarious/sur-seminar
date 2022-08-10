import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { NestoResolverBase } from "./base/nesto.resolver.base";
import { Nesto } from "./base/Nesto";
import { NestoService } from "./nesto.service";

@graphql.Resolver(() => Nesto)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class NestoResolver extends NestoResolverBase {
  constructor(
    protected readonly service: NestoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
