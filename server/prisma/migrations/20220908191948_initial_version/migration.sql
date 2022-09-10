/*
  Warnings:

  - You are about to drop the column `password` on the `Renter` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Renter` table. All the data in the column will be lost.
  - You are about to drop the column `idApartmentId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nameSurname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_idApartmentId_fkey";

-- AlterTable
ALTER TABLE "Renter" DROP COLUMN "password",
DROP COLUMN "username";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "idApartmentId",
ADD COLUMN     "apartmentId" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "nameSurname",
DROP COLUMN "phoneNumber";

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_apartmentId_fkey" FOREIGN KEY ("apartmentId") REFERENCES "Apartment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
