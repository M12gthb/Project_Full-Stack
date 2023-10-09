-- DropForeignKey
ALTER TABLE "anouncements" DROP CONSTRAINT "anouncements_userId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_anouncementsId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_userId_fkey";

-- AddForeignKey
ALTER TABLE "anouncements" ADD CONSTRAINT "anouncements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_anouncementsId_fkey" FOREIGN KEY ("anouncementsId") REFERENCES "anouncements"("id") ON DELETE CASCADE ON UPDATE CASCADE;
