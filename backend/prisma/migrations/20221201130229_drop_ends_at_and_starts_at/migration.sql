/*
  Warnings:

  - You are about to drop the column `endsAt` on the `elections` table. All the data in the column will be lost.
  - You are about to drop the column `startsAt` on the `elections` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "elections" DROP COLUMN "endsAt",
DROP COLUMN "startsAt",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true;
