/*
  Warnings:

  - The `type` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `fuel` on the `anouncements` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TypesUsers" AS ENUM ('comprador', 'anunciante');

-- CreateEnum
CREATE TYPE "Fuel" AS ENUM ('gasolina', 'etanol');

-- AlterTable
ALTER TABLE "anouncements" DROP COLUMN "fuel",
ADD COLUMN     "fuel" "Fuel" NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "type",
ADD COLUMN     "type" "TypesUsers" NOT NULL DEFAULT 'comprador';
