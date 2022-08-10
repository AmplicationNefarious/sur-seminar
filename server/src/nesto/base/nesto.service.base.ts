/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Nesto } from "@prisma/client";

export class NestoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.NestoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NestoFindManyArgs>
  ): Promise<number> {
    return this.prisma.nesto.count(args);
  }

  async findMany<T extends Prisma.NestoFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.NestoFindManyArgs>
  ): Promise<Nesto[]> {
    return this.prisma.nesto.findMany(args);
  }
  async findOne<T extends Prisma.NestoFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.NestoFindUniqueArgs>
  ): Promise<Nesto | null> {
    return this.prisma.nesto.findUnique(args);
  }
  async create<T extends Prisma.NestoCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NestoCreateArgs>
  ): Promise<Nesto> {
    return this.prisma.nesto.create<T>(args);
  }
  async update<T extends Prisma.NestoUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.NestoUpdateArgs>
  ): Promise<Nesto> {
    return this.prisma.nesto.update<T>(args);
  }
  async delete<T extends Prisma.NestoDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.NestoDeleteArgs>
  ): Promise<Nesto> {
    return this.prisma.nesto.delete(args);
  }
}