/*
  Warnings:

  - Changed the type of `mileage` on the `anouncements` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `priceTabel` on the `anouncements` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "anouncements" DROP COLUMN "mileage",
ADD COLUMN     "mileage" INTEGER NOT NULL,
DROP COLUMN "priceTabel",
ADD COLUMN     "priceTabel" INTEGER NOT NULL,
ALTER COLUMN "description" SET DATA TYPE TEXT;
