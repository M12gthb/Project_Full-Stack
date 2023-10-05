/*
  Warnings:

  - Changed the type of `fuel` on the `anouncements` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "anouncements" DROP COLUMN "fuel",
ADD COLUMN     "fuel" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Fuel";

-- DropEnum
DROP TYPE "Types";
