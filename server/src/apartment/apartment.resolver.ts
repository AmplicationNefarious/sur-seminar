import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ApartmentResolverBase } from "./base/apartment.resolver.base";
import { Apartment } from "./base/Apartment";
import { ApartmentService } from "./apartment.service";

@graphql.Resolver(() => Apartment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ApartmentResolver extends ApartmentResolverBase {
  constructor(
    protected readonly service: ApartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
