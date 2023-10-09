-- DropForeignKey
ALTER TABLE "image" DROP CONSTRAINT "image_anouncementId_fkey";

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_anouncementId_fkey" FOREIGN KEY ("anouncementId") REFERENCES "anouncements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
