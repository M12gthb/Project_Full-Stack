/*
  Warnings:

  - Changed the type of `price` on the `anouncements` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `description` on the `anouncements` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "anouncements" DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL,
DROP COLUMN "description",
ADD COLUMN     "description" INTEGER NOT NULL;
