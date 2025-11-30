/*
  Warnings:

  - You are about to drop the column `clerUserid` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[clerkUserid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clerkUserid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_userId_fkey";

-- DropIndex
DROP INDEX "User_clerUserid_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "clerUserid",
ADD COLUMN     "clerkUserid" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkUserid_key" ON "User"("clerkUserid");

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("clerkUserid") ON DELETE CASCADE ON UPDATE CASCADE;
