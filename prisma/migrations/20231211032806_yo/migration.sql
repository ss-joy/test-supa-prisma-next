/*
  Warnings:

  - You are about to drop the `Name` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Name";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
