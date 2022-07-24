/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Renter, Apartment } from "@prisma/client";

export class RenterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RenterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RenterFindManyArgs>
  ): Promise<number> {
    return this.prisma.renter.count(args);
  }

  async findMany<T extends Prisma.RenterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RenterFindManyArgs>
  ): Promise<Renter[]> {
    return this.prisma.renter.findMany(args);
  }
  async findOne<T extends Prisma.RenterFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RenterFindUniqueArgs>
  ): Promise<Renter | null> {
    return this.prisma.renter.findUnique(args);
  }
  async create<T extends Prisma.RenterCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RenterCreateArgs>
  ): Promise<Renter> {
    return this.prisma.renter.create<T>(args);
  }
  async update<T extends Prisma.RenterUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RenterUpdateArgs>
  ): Promise<Renter> {
    return this.prisma.renter.update<T>(args);
  }
  async delete<T extends Prisma.RenterDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RenterDeleteArgs>
  ): Promise<Renter> {
    return this.prisma.renter.delete(args);
  }

  async findApartmants(
    parentId: string,
    args: Prisma.ApartmentFindManyArgs
  ): Promise<Apartment[]> {
    return this.prisma.renter
      .findUnique({
        where: { id: parentId },
      })
      .apartmants(args);
  }
}
