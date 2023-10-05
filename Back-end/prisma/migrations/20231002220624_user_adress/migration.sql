-- CreateEnum
CREATE TYPE "Type" AS ENUM ('comprador', 'anunciante');

-- CreateEnum
CREATE TYPE "Fuel" AS ENUM ('gasolina', 'etanol');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "birthdate" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "Type" NOT NULL DEFAULT 'comprador',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anouncements" (
    "id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "fuel" "Fuel" NOT NULL,
    "mileage" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "priceTabel" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "publish" BOOLEAN NOT NULL DEFAULT false,
    "cover_img" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "anouncements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "comment" TEXT NOT NULL,
    "commentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "anouncementId" TEXT NOT NULL,
    "anouncementsId" TEXT NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("userId","anouncementId")
);

-- CreateTable
CREATE TABLE "image" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "anouncementId" TEXT NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "address_userId_key" ON "address"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "image_anouncementId_key" ON "image"("anouncementId");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anouncements" ADD CONSTRAINT "anouncements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_anouncementsId_fkey" FOREIGN KEY ("anouncementsId") REFERENCES "anouncements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_anouncementId_fkey" FOREIGN KEY ("anouncementId") REFERENCES "anouncements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
