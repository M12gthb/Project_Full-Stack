/*
  Warnings:

  - You are about to drop the column `anouncementsId` on the `comments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_anouncementsId_fkey";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "anouncementsId";

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_anouncementId_fkey" FOREIGN KEY ("anouncementId") REFERENCES "anouncements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
