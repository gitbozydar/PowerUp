/*
  Warnings:

  - You are about to drop the column `companyName` on the `BusinessContact` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `BusinessContact` table. All the data in the column will be lost.
  - You are about to drop the column `path` on the `BusinessContact` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `BusinessContact` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[businessContactId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `customerCompanyName` to the `BusinessContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerEmail` to the `BusinessContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerPhone` to the `BusinessContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customerRepoPath` to the `BusinessContact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BusinessContact" DROP COLUMN "companyName",
DROP COLUMN "email",
DROP COLUMN "path",
DROP COLUMN "phone",
ADD COLUMN     "customerCompanyName" TEXT NOT NULL,
ADD COLUMN     "customerEmail" TEXT NOT NULL,
ADD COLUMN     "customerPhone" TEXT NOT NULL,
ADD COLUMN     "customerRepoPath" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_businessContactId_key" ON "User"("businessContactId");
