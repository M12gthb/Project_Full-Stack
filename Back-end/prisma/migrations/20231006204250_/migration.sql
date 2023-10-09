/*
  Warnings:

  - The primary key for the `comments` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `comments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "comments" DROP CONSTRAINT "comments_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "comments_pkey" PRIMARY KEY ("id");
