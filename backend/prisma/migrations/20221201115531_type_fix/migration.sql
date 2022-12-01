/*
  Warnings:

  - You are about to drop the column `tyoe` on the `elections` table. All the data in the column will be lost.
  - Added the required column `type` to the `elections` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "elections" DROP COLUMN "tyoe",
ADD COLUMN     "type" TEXT NOT NULL;
