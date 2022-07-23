/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateApartmentArgs } from "./CreateApartmentArgs";
import { UpdateApartmentArgs } from "./UpdateApartmentArgs";
import { DeleteApartmentArgs } from "./DeleteApartmentArgs";
import { ApartmentFindManyArgs } from "./ApartmentFindManyArgs";
import { ApartmentFindUniqueArgs } from "./ApartmentFindUniqueArgs";
import { Apartment } from "./Apartment";
import { ReservationFindManyArgs } from "../../reservation/base/ReservationFindManyArgs";
import { Reservation } from "../../reservation/base/Reservation";
import { User } from "../../user/base/User";
import { ApartmentService } from "../apartment.service";

@graphql.Resolver(() => Apartment)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ApartmentResolverBase {
  constructor(
    protected readonly service: ApartmentService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "read",
    possession: "any",
  })
  async _apartmentsMeta(
    @graphql.Args() args: ApartmentFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Apartment])
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "read",
    possession: "any",
  })
  async apartments(
    @graphql.Args() args: ApartmentFindManyArgs
  ): Promise<Apartment[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Apartment, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "read",
    possession: "own",
  })
  async apartment(
    @graphql.Args() args: ApartmentFindUniqueArgs
  ): Promise<Apartment | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Apartment)
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "create",
    possession: "any",
  })
  async createApartment(
    @graphql.Args() args: CreateApartmentArgs
  ): Promise<Apartment> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        id_user: args.data.id_user
          ? {
              connect: args.data.id_user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Apartment)
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "update",
    possession: "any",
  })
  async updateApartment(
    @graphql.Args() args: UpdateApartmentArgs
  ): Promise<Apartment | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          id_user: args.data.id_user
            ? {
                connect: args.data.id_user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Apartment)
  @nestAccessControl.UseRoles({
    resource: "Apartment",
    action: "delete",
    possession: "any",
  })
  async deleteApartment(
    @graphql.Args() args: DeleteApartmentArgs
  ): Promise<Apartment | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Reservation])
  @nestAccessControl.UseRoles({
    resource: "Reservation",
    action: "read",
    possession: "any",
  })
  async reservations(
    @graphql.Parent() parent: Apartment,
    @graphql.Args() args: ReservationFindManyArgs
  ): Promise<Reservation[]> {
    const results = await this.service.findReservations(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async idUser(@graphql.Parent() parent: Apartment): Promise<User | null> {
    const result = await this.service.getIdUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
