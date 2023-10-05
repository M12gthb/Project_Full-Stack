/*
  Warnings:

  - The `type` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Types" AS ENUM ('comprador', 'anunciante');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "type",
ADD COLUMN     "type" "Types" NOT NULL DEFAULT 'comprador';

-- DropEnum
DROP TYPE "Type";
