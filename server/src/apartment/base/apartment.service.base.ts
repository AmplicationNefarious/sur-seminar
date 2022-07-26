/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Apartment, Renter, Reservation } from "@prisma/client";

export class ApartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ApartmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApartmentFindManyArgs>
  ): Promise<number> {
    return this.prisma.apartment.count(args);
  }

  async findMany<T extends Prisma.ApartmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApartmentFindManyArgs>
  ): Promise<Apartment[]> {
    return this.prisma.apartment.findMany(args);
  }
  async findOne<T extends Prisma.ApartmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApartmentFindUniqueArgs>
  ): Promise<Apartment | null> {
    return this.prisma.apartment.findUnique(args);
  }
  async create<T extends Prisma.ApartmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApartmentCreateArgs>
  ): Promise<Apartment> {
    return this.prisma.apartment.create<T>(args);
  }
  async update<T extends Prisma.ApartmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApartmentUpdateArgs>
  ): Promise<Apartment> {
    return this.prisma.apartment.update<T>(args);
  }
  async delete<T extends Prisma.ApartmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ApartmentDeleteArgs>
  ): Promise<Apartment> {
    return this.prisma.apartment.delete(args);
  }

  async findRenters(
    parentId: string,
    args: Prisma.RenterFindManyArgs
  ): Promise<Renter[]> {
    return this.prisma.apartment
      .findUnique({
        where: { id: parentId },
      })
      .renters(args);
  }

  async findReservations(
    parentId: string,
    args: Prisma.ReservationFindManyArgs
  ): Promise<Reservation[]> {
    return this.prisma.apartment
      .findUnique({
        where: { id: parentId },
      })
      .reservations(args);
  }
}
