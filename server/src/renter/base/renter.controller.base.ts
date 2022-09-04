/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { RenterService } from "../renter.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Public } from "../../decorators/public.decorator";
import { RenterCreateInput } from "./RenterCreateInput";
import { RenterWhereInput } from "./RenterWhereInput";
import { RenterWhereUniqueInput } from "./RenterWhereUniqueInput";
import { RenterFindManyArgs } from "./RenterFindManyArgs";
import { RenterUpdateInput } from "./RenterUpdateInput";
import { Renter } from "./Renter";
import { ApartmentFindManyArgs } from "../../apartment/base/ApartmentFindManyArgs";
import { Apartment } from "../../apartment/base/Apartment";
import { ApartmentWhereUniqueInput } from "../../apartment/base/ApartmentWhereUniqueInput";
@swagger.ApiBasicAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RenterControllerBase {
  constructor(
    protected readonly service: RenterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Renter",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Renter })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: RenterCreateInput): Promise<Renter> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        nameSurname: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Renter",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Renter] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(RenterFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Renter[]> {
    const args = plainToClass(RenterFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        nameSurname: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Renter",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Renter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: RenterWhereUniqueInput
  ): Promise<Renter | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        nameSurname: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Renter",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Renter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: RenterWhereUniqueInput,
    @common.Body() data: RenterUpdateInput
  ): Promise<Renter | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          nameSurname: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Renter",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Renter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: RenterWhereUniqueInput
  ): Promise<Renter | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          nameSurname: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Get("/:id/apartments")
  @ApiNestedQuery(ApartmentFindManyArgs)
  async findManyApartments(
    @common.Req() request: Request,
    @common.Param() params: RenterWhereUniqueInput
  ): Promise<Apartment[]> {
    const query = plainToClass(ApartmentFindManyArgs, request.query);
    const results = await this.service.findApartments(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        description: true,
        id: true,
        name: true,
        price: true,

        renter: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Renter",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/apartments")
  async connectApartments(
    @common.Param() params: RenterWhereUniqueInput,
    @common.Body() body: ApartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apartments: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Renter",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/apartments")
  async updateApartments(
    @common.Param() params: RenterWhereUniqueInput,
    @common.Body() body: ApartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apartments: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Renter",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/apartments")
  async disconnectApartments(
    @common.Param() params: RenterWhereUniqueInput,
    @common.Body() body: ApartmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apartments: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
